import axios, { AxiosError, AxiosRequestConfig } from "axios"
import { parseCookies, setCookie } from "nookies"

interface MyData {
  code?: string // Permite que 'code' seja opcional
}

let cookies = parseCookies() //let pq muda para o refresh token
let isRefreshing = false
let failedRequestsQueue: {
  resolve: (token: string) => void
  reject: (err: AxiosError) => void
}[] = [] //tipagem com o objeto que ela recebe

export const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Authorization: `Bearer ${cookies["Auth.token"]}`,
  },
})

api.interceptors.response.use(
  (response) => {
    //é a parte que faz o refresh token a partir da resposta da api sobre a exp. do token
    return response
  },
  (error: AxiosError<MyData>) => {
    if (error.response?.status === 401) {
      if (error.response.data?.code === "token.expired") {
        cookies = parseCookies()

        const { "Auth.refreshToken": refreshToken } = cookies
        const originalConfig = error.config as AxiosRequestConfig // Tipo AxiosRequestConfig adicionado aqui

        if (!isRefreshing) {
          isRefreshing = true

          api
            .post("/refresh", {
              refreshToken,
            })
            .then((response) => {
              const token = response.data.token

              setCookie(undefined, "Auth.token", token, {
                maxAge: 60 * 60 * 24 * 30, //tempo que o cookie fica salvo
                path: "/", //qualquer endereço da aplicação tem acesso ao cookie
              })
              setCookie(
                undefined,
                "Auth.refreshToken",
                response.data.refreshToken,
                {
                  // esse response é o da const token ali cima
                  maxAge: 60 * 60 * 24 * 30, //tempo que o cookie fica salvo
                  path: "/", //qualquer endereço da aplicação tem acesso ao cookie
                }
              )

              api.defaults.headers["Authorization"] = `Bearer ${token}`

              failedRequestsQueue.forEach((request) => request.resolve(token))
              failedRequestsQueue = []
            })
            .catch((err) => {
              failedRequestsQueue.forEach((request) => request.reject(err))
              failedRequestsQueue = []
            })
            .finally(() => {
              isRefreshing = false
            })
        }

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            resolve: (token: string) => {
              if (originalConfig.headers) {
                originalConfig.headers["Authorization"] = `Bearer ${token}`
              }

              resolve(api(originalConfig)) //fazendo uma chamada api de novo
            },
            reject: (err: AxiosError) => {
              reject(err)
            },
          })
        })
      } else {
        //deslogar usuario
      }
    }
  }
)
