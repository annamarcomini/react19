
import { createContext, ReactNode } from "react"

type signInCredentials = {
email: string;
password: string;
}

type AuthConstextData= {
 signIn(credentials: signInCredentials): Promise<void>
 isAuthenticated: boolean;
}

type AuthProviderProps= {
 children: ReactNode;
}

const AuthContext= createContext({} as AuthConstextData)

export function AuthProvider({children}: AuthProviderProps){
 const isAuthenticated = false //se o user está ou não autenticado

 async function signIn({email, password}:signInCredentials){ //para dizer oq se espera que o user coloque na autenticação
  console.log({email, password})
 }

 return (
  <AuthContext.Provider value={{signIn, isAuthenticated}}>
  {children}
  </AuthContext.Provider>
  )
}