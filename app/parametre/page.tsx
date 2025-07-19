"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useApp } from "@/lib/contexts/app-context"
import { Globe, Moon, Sun, Bell, Shield, User } from "lucide-react"

export default function ParametrePage() {
  const { t, language, setLanguage, theme, setTheme } = useApp()

  return (
    <DashboardLayout>
      <div className="p-6 max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">{t("settings")}</h1>
          <p className="text-muted-foreground">Gérez vos préférences et paramètres</p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                {t("language")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Français</p>
                  <p className="text-sm text-muted-foreground">Langue française</p>
                </div>
                <Button variant={language === "fr" ? "default" : "outline"} onClick={() => setLanguage("fr")}>
                  🇫🇷 FR
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">English</p>
                  <p className="text-sm text-muted-foreground">English language</p>
                </div>
                <Button variant={language === "en" ? "default" : "outline"} onClick={() => setLanguage("en")}>
                  🇺🇸 EN
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {theme === "light" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                {t("theme")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{t("light")}</p>
                  <p className="text-sm text-muted-foreground">Thème clair</p>
                </div>
                <Button variant={theme === "light" ? "default" : "outline"} onClick={() => setTheme("light")}>
                  <Sun className="h-4 w-4 mr-2" />
                  {t("light")}
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{t("dark")}</p>
                  <p className="text-sm text-muted-foreground">Thème sombre</p>
                </div>
                <Button variant={theme === "dark" ? "default" : "outline"} onClick={() => setTheme("dark")}>
                  <Moon className="h-4 w-4 mr-2" />
                  {t("dark")}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                {t("notifications")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Notifications push</p>
                  <p className="text-sm text-muted-foreground">Recevoir des notifications push</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Notifications email</p>
                  <p className="text-sm text-muted-foreground">Recevoir des emails de notification</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Notifications SMS</p>
                  <p className="text-sm text-muted-foreground">Recevoir des SMS de notification</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                {t("privacy")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Profil public</p>
                  <p className="text-sm text-muted-foreground">Rendre votre profil visible publiquement</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Partage de données</p>
                  <p className="text-sm text-muted-foreground">Autoriser le partage de données anonymes</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                {t("account")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full">
                Modifier le mot de passe
              </Button>
              <Button variant="outline" className="w-full">
                Exporter les données
              </Button>
              <Button variant="destructive" className="w-full">
                Supprimer le compte
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
