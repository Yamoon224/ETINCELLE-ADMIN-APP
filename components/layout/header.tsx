"use client"

import { Bell, Sun, Moon, Globe } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useApp } from "@/lib/contexts/app-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const { t, language, setLanguage, theme, setTheme } = useApp()

  return (
    <header className="fixed top-0 left-[205px] right-0 h-[80px] border-b bg-background z-10">
      <div className="flex items-center justify-between px-6 h-full">
        <div className="w-full max-w-xl">
          <Input type="text" placeholder={t("generalSearch")} className="w-full rounded-md border border-border" />
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setLanguage("fr")}>🇫🇷 Français</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("en")}>🇺🇸 English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>

          <Button variant="ghost" size="icon">
            <Bell className="h-6 w-6 text-amber-400" />
          </Button>
        </div>
      </div>
    </header>
  )
}
