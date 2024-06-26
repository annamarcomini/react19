"use client"
import { useContext, useEffect } from "react"
import { AuthContext } from "@/contexts/AuthContext"
import styles from "./page.module.css"
import { api } from "@/services/api"

export default function Dashboard() {
  const { user } = useContext(AuthContext)

  useEffect(() => {
    api.get("/me").then((response) => console.log(response))
  }, [])

  return (
    <div className={styles.description}>
      <h1>Dashboard: {user?.email}</h1>
    </div>
  )
}
