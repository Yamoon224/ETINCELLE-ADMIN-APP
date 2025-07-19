"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { useApp } from "@/lib/contexts/app-context"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()
  const { t, setIsAuthenticated } = useApp()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      if (email && password) {
        setIsAuthenticated(true)
        router.push("/dashboard")
      } else {
        toast({
          title: "Erreur de connexion",
          description: "Veuillez remplir tous les champs",
          variant: "destructive",
        })
      }
    }, 1000)
  }

  return (
    <div className="w-full max-w-md p-8 rounded-lg bg-slate-800 text-white">
      <h2 className="text-2xl font-bold text-center mb-2">{t("connection")}</h2>
      <h1 className="text-4xl font-bold text-center mb-8">Etincelle</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm">
            {t("enterAddress")}
          </label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-0 border-b-2 border-gradient-to-r from-red-500 to-purple-500 focus:ring-0 rounded-md text-white"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm">
            {t("enterCode")}
          </label>
          <div className="relative">
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-0 border-b-2 border-gradient-to-r from-red-500 to-purple-500 focus:ring-0 rounded-md text-white"
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full py-6 bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white font-medium rounded-md"
        >
          {isLoading ? t("loading") : t("validate")}
        </Button>
      </form>
    </div>
  )
}
