"use client"
import { api } from "@/services/api"
import { useRouter } from "next/navigation"
import {setCookie} from "nookies"
import { createContext, ReactNode, useState } from "react"

type User = {
  email: string
  permissions: string[]
  roles: string[]
}

type SignInCredentials = {
  email: string
  password: string
}

type AuthConstextData = {
  signIn(credentials: SignInCredentials): Promise<void>
  isAuthenticated: boolean
  user: User | null;
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthConstextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user //se o user está ou não autenticado
  const router = useRouter()

  async function signIn({ email, password }: SignInCredentials) {
    //para dizer oq se espera que o user coloque na autenticação
    try {
      const response = await api.post("sessions", {
        email,
        password,
      })

      const { token, refresToken, permissions, roles } = response.data

      setCookie(undefined,'Auth.token', token, {
       maxAge: 60*60*24*30, //tempo que o cookie fica salvo
       path: '/' //qualquer endereço da aplicação tem acesso ao cookie
      })
      setCookie(undefined, "Auth.refreshtoken", refresToken)

      setUser({
        email,
        permissions,
        roles,
      })
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
