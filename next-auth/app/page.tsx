"use client"
import { AuthContext } from "@/contexts/AuthContext"
import { FormEvent, useContext, useState } from "react"
import styles from "./page.module.css"

export default function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  

  const{signIn}= useContext(AuthContext)

  async function handleSubmit(event: FormEvent){
    event.preventDefault()

    const data ={
      email,
      password,
    }

    await signIn(data)
  
  }
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h1>Access the System</h1>
      <div>
        <input
          type="email"
          placeholder="Type your E-mail!"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Type your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Enter</button>
    </form>
  )
}
