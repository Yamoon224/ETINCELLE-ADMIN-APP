"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Building2, Briefcase, MessageSquarePlus, User, Settings, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { useApp } from "@/lib/contexts/app-context"

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { t, setIsAuthenticated } = useApp()

  const handleLogout = () => {
    setIsAuthenticated(false)
    router.push("/")
  }

  const menuItems = [
    {
      name: t("dashboard"),
      href: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      name: t("establishments"),
      href: "/etablissements",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      name: t("portfolio"),
      href: "/portefeuille",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      name: t("announcements"),
      href: "/annonces",
      icon: <MessageSquarePlus className="h-5 w-5" />,
    },
    {
      name: t("profile"),
      href: "/profile",
      icon: <User className="h-5 w-5" />,
    },
    {
      name: t("settings"),
      href: "/parametre",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  return (
    <aside className="fixed left-0 top-0 h-full w-[205px] border-r bg-background">
      <div className="flex flex-col h-full">
        <div className="border-b py-4"></div>
        <nav className="flex-1 space-y-1 px-3 py-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-sm font-medium",
                  isActive
                    ? "bg-gradient-to-r from-red-500 to-purple-600 text-white"
                    : "text-foreground hover:bg-muted",
                )}
              >
                <div
                  className={cn(
                    "mr-3 flex h-6 w-6 items-center justify-center rounded-full",
                    isActive ? "bg-white text-purple-600" : "bg-muted",
                  )}
                >
                  {item.icon}
                </div>
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="p-3 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted w-full"
          >
            <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-muted">
              <LogOut className="h-5 w-5" />
            </div>
            {t("logout")}
          </button>
        </div>
      </div>
    </aside>
  )
}
