"use client"
import { api } from "@/services/api"
import { useRouter } from "next/navigation"
import {setCookie, parseCookies} from "nookies"
import { createContext, ReactNode, useEffect, useState } from "react"

type User = {
  email: string
  permissions: string[]
  roles: string[]
}

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>
  isAuthenticated: boolean
  user: User | null;
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user //se o user está ou não autenticado
  const router = useRouter()

  useEffect(()=> { 
  const {'Auth.token': token} = parseCookies()

  if(token){
    api.get('/me').then(response=> {
      const {email, permissions, roles}= response.data  //rota me retorna as informações do user logado

      setUser({email, permissions, roles})
    })
  }
  }, [])

  async function signIn({ email, password }: SignInCredentials) {
    //para dizer oq se espera que o user coloque na autenticação
    try {
      const response = await api.post("sessions", {
        email,
        password,
      })

      const { token, refreshToken, permissions, roles } = response.data

      setCookie(undefined,'Auth.token', token, {
       maxAge: 60*60*24*30, //tempo que o cookie fica salvo
       path: '/' //qualquer endereço da aplicação tem acesso ao cookie
      })
      setCookie(undefined, 'Auth.refreshToken', refreshToken, {
       maxAge: 60*60*24*30, //tempo que o cookie fica salvo
       path: '/' //qualquer endereço da aplicação tem acesso ao cookie
      })

      setUser({
        email,
        permissions,
        roles,
      })

     api.defaults.headers['Authorization']= `Bearer ${token}`;

      router.push("/dashboard")

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}
