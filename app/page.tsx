"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { LoginForm } from "@/components/login-form"
import { useApp } from "@/lib/contexts/app-context"

export default function Home() {
  const { isAuthenticated } = useApp()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard")
    }
  }, [isAuthenticated, router])

  if (isAuthenticated) {
    return null // or a loading spinner
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900">
      <LoginForm />
    </main>
  )
}
