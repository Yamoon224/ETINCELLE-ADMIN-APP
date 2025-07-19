"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, SlidersHorizontal, MoreVertical, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"
import { useApp } from "@/lib/contexts/app-context"

export default function EtablissementsPage() {
  const { t } = useApp()

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex items-center mb-6">
          <Link href="/dashboard" className="mr-2">
            <ArrowLeft className="h-6 w-6 text-muted-foreground" />
          </Link>
          <h1 className="text-2xl font-medium text-foreground">{t("establishments")}</h1>

          <div className="ml-auto flex items-center gap-2">
            <div className="relative w-80">
              <Input
                type="text"
                placeholder={t("search")}
                className="pl-10 pr-4 py-2 rounded-full border border-border"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <button className="p-2 rounded-full border border-border">
              <SlidersHorizontal className="h-5 w-5 text-muted-foreground" />
            </button>
            <button className="p-2 rounded-full border border-border">
              <MoreVertical className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          <Card className="border-pink-300 overflow-hidden">
            <CardContent className="p-4">
              <h3 className="text-sm text-muted-foreground">{t("total")}</h3>
              <p className="text-4xl font-bold text-pink-500">52 000</p>
              <p className="text-xs text-muted-foreground mt-1">{t("today")}</p>
              <div className="absolute bottom-2 right-2 bg-amber-400 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                17
              </div>
            </CardContent>
          </Card>

          <Card className="bg-amber-900 text-white overflow-hidden">
            <CardContent className="p-4">
              <h3 className="text-sm">{t("restaurants")}</h3>
              <p className="text-4xl font-bold">50 000</p>
              <p className="text-xs mt-1">{t("today")}</p>
              <div className="absolute bottom-2 right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center text-xs text-amber-900">
                7
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-500 text-white overflow-hidden">
            <CardContent className="p-4">
              <h3 className="text-sm">{t("hotels")}</h3>
              <p className="text-4xl font-bold">50 000</p>
              <p className="text-xs mt-1">{t("today")}</p>
              <div className="absolute bottom-2 right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center text-xs text-blue-500">
                17
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-red-500 to-purple-600 text-white overflow-hidden">
            <CardContent className="p-4">
              <h3 className="text-sm">{t("showTotal")}</h3>
              <p className="text-4xl font-bold">120 000</p>
              <p className="text-xs mt-1">{t("today")}</p>
              <div className="absolute bottom-2 right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center text-xs text-purple-600">
                23
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          {[
            { status: "active", date: "10/07/2026" },
            { status: "expired", date: "10/07/2024" },
            { status: "active", date: "10/07/2026", new: true },
          ].map((item, i) => (
            <Card key={i} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-center">
                  <div className="relative">
                    {item.new && (
                      <div className="absolute -top-1 -left-1 bg-green-500 text-white text-xs px-1 rounded rotate-12">
                        NEW
                      </div>
                    )}
                    <div className="h-20 w-20 rounded-full bg-red-800 flex items-center justify-center">
                      <span className="text-white text-xs">Restaurant</span>
                    </div>
                  </div>

                  <div className="ml-4">
                    <h3 className="text-xl font-medium">Resto le Brenuss</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="inline-block w-4 h-3 bg-orange-500 mr-1"></span>
                      <span>Abidjan, Cocody</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Categories: Restaurant</p>
                  </div>

                  <div className="ml-auto grid grid-cols-3 gap-8">
                    <div>
                      <p className="text-sm text-muted-foreground">{t("serverCount")}</p>
                      <p className="text-3xl font-medium text-center">3</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t("usageCount")}</p>
                      <p className="text-3xl font-medium text-center">35</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t("registrationDate")}</p>
                      <p className="text-lg font-medium">10/07/2020</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t("subscriptionEnd")}</p>
                      <p
                        className={`text-lg font-medium ${item.status === "active" ? "text-green-500" : "text-red-500"}`}
                      >
                        {item.date}
                      </p>
                    </div>
                  </div>

                  <div className="ml-4">
                    {item.status === "active" ? (
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    ) : (
                      <XCircle className="h-8 w-8 text-red-500" />
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
