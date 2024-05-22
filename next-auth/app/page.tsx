"use client"
import { AuthContext } from "@/contexts/AuthContext"
import { FormEvent, useContext, useState } from "react"
import { FaUser, FaLock } from "react-icons/fa"
import styles from "./page.module.css"

export default function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useContext(AuthContext)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data = {
      email,
      password,
    }

    await signIn(data)
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.content}>
        <h1>Access the System</h1>
        <div className={styles.input}>
          <input
            type="email"
            placeholder="Type your E-mail!"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaUser className={styles.icon} />
        </div>
        <div className={styles.input}>
          <input
            type="password"
            placeholder="Type your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className={styles.icon} />
        </div>
        <button type="submit">Enter</button>
      </form>
    </div>
  )
}
