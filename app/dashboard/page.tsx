"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useApp } from "@/lib/contexts/app-context"
import { TrendingUp, TrendingDown, Users, Building, DollarSign, Activity } from "lucide-react"

export default function DashboardPage() {
  const { t } = useApp()

  const stats = [
    {
      title: t("revenue"),
      value: "125,430",
      change: "+12.5%",
      trend: "up",
      icon: <DollarSign className="h-6 w-6" />,
      color: "text-green-600",
    },
    {
      title: t("expenses"),
      value: "73,210",
      change: "-8.2%",
      trend: "down",
      icon: <TrendingDown className="h-6 w-6" />,
      color: "text-red-600",
    },
    {
      title: t("establishments"),
      value: "156",
      change: "+5.1%",
      trend: "up",
      icon: <Building className="h-6 w-6" />,
      color: "text-blue-600",
    },
    {
      title: t("activeUsers"),
      value: "2,847",
      change: "+18.7%",
      trend: "up",
      icon: <Users className="h-6 w-6" />,
      color: "text-purple-600",
    },
  ]

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{t("dashboard")}</h1>
          <p className="text-muted-foreground">Vue d'ensemble de votre activité</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      {stat.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
                      )}
                      <span className={`text-sm ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className={`${stat.color}`}>{stat.icon}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenus mensuels</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-lg">
                <div className="text-center">
                  <Activity className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">Graphique des revenus</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Activité récente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: "Nouveau restaurant inscrit", time: "Il y a 2h", type: "success" },
                  { action: "Paiement reçu", time: "Il y a 4h", type: "info" },
                  { action: "Annonce publiée", time: "Il y a 6h", type: "warning" },
                  { action: "Utilisateur connecté", time: "Il y a 8h", type: "info" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                    <div
                      className={`w-3 h-3 rounded-full ${
                        activity.type === "success"
                          ? "bg-green-500"
                          : activity.type === "warning"
                            ? "bg-yellow-500"
                            : "bg-blue-500"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
