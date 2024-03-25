"use client"
import { useContext } from "react"
import { AuthContext } from "@/contexts/AuthContext"
import styles from "./page.module.css"

export default function Dashboard() {
  // Verifica se o código está sendo executado do lado do cliente antes de usar o contexto

  const {user} = useContext(AuthContext)
  
  return (
    <div className={styles.description}>
      <h1>Dashboard: {user?.email}</h1>
    </div>
  )
}