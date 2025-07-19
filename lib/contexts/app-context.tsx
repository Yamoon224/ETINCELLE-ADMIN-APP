"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { translations, type Language, type TranslationKey } from "@/lib/i18n"

interface AppContextType {
  language: Language
  setLanguage: (lang: Language) => void
  theme: "light" | "dark"
  setTheme: (theme: "light" | "dark") => void
  t: (key: TranslationKey) => string
  isAuthenticated: boolean
  setIsAuthenticated: (auth: boolean) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key
  }

  useEffect(() => {
    // Load saved preferences
    const savedLang = localStorage.getItem("language") as Language
    const savedTheme = localStorage.getItem("theme") as "light" | "dark"
    const savedAuth = localStorage.getItem("isAuthenticated") === "true"

    if (savedLang) setLanguage(savedLang)
    if (savedTheme) setTheme(savedTheme)
    setIsAuthenticated(savedAuth)
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  useEffect(() => {
    localStorage.setItem("theme", theme)
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated.toString())
  }, [isAuthenticated])

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        t,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
