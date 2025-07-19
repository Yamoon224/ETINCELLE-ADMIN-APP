"use client"

import type React from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MoreVertical } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useApp } from "@/lib/contexts/app-context"

export default function ProfilePage() {
  const { t } = useApp()

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex items-center mb-6">
          <Link href="/dashboard" className="mr-2">
            <ArrowLeft className="h-6 w-6 text-muted-foreground" />
          </Link>
          <h1 className="text-2xl font-medium text-foreground">{t("profile")}</h1>

          <div className="ml-auto">
            <button className="p-2">
              <MoreVertical className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-start">
              <div className="h-20 w-20 rounded-full bg-red-800 flex items-center justify-center">
                <span className="text-white text-xs">Restaurant</span>
              </div>

              <div className="ml-4">
                <h2 className="text-2xl font-medium">Resto le Brenuss</h2>
                <p className="text-muted-foreground">Categories: Restaurant</p>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <span className="inline-block w-4 h-3 bg-orange-500 mr-1"></span>
                  <span>Yamoussoukro, Quartier Millionnaire</span>
                </div>
              </div>

              <div className="ml-auto text-right">
                <p className="text-sm text-muted-foreground">{t("subscriptionEnd")}</p>
                <p className="text-lg font-medium text-green-500">10/07/2026</p>
                <p className="text-sm text-muted-foreground mt-2">{t("registrationDate")}</p>
                <p className="text-sm font-medium">10/07/2020</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-6 mt-6">
              <div>
                <p className="text-sm text-muted-foreground">{t("serverCount")}</p>
                <p className="text-lg font-medium">03</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Entre le nom</p>
                <p className="text-lg font-medium">CISSÉ IDRISS</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Contact</p>
                <p className="text-lg font-medium">+225 0759028545</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Adresse email</p>
                <p className="text-lg font-medium">cisse@gmail.com</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-3 gap-6">
          <Card className="bg-gradient-to-r from-purple-500 to-purple-700 text-white col-span-1 row-span-2">
            <CardContent className="p-4 h-full">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm">Trier : Par Semaine</p>
                <button className="bg-white/20 p-1 rounded">
                  <SlidersIcon className="h-4 w-4" />
                </button>
              </div>

              <div className="h-full flex items-center justify-center">{/* Chart would go here */}</div>
            </CardContent>
          </Card>

          <Card className="bg-blue-500 text-white">
            <CardContent className="p-4 h-40 flex items-center justify-center">
              {/* Content would go here */}
            </CardContent>
          </Card>

          <Card className="bg-green-500 text-white">
            <CardContent className="p-4">
              <p className="text-xs uppercase">TOTAL</p>
              <h3 className="text-2xl font-bold mb-4">Additions</h3>
              <div className="flex justify-end">
                <div className="bg-green-400/50 h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold">
                  134
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-red-600 text-white">
            <CardContent className="p-4">
              <p className="text-xs uppercase">TOTAL</p>
              <h3 className="text-2xl font-bold mb-4">Non effectuées</h3>
              <div className="flex justify-end">
                <div className="bg-red-500/50 h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold">
                  8
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1 row-span-2">
            <CardContent className="p-4 h-full">
              <h3 className="text-lg font-medium mb-2">LOCALISATION</h3>
              <div className="h-[calc(100%-2rem)] w-full bg-blue-50 dark:bg-blue-950 rounded-lg overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Carte de localisation"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">Map data ©2025</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

function SlidersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="4" y1="21" y2="14" />
      <line x1="4" x2="4" y1="10" y2="3" />
      <line x1="12" x2="12" y1="21" y2="12" />
      <line x1="12" x2="12" y1="8" y2="3" />
      <line x1="20" x2="20" y1="21" y2="16" />
      <line x1="20" x2="20" y1="12" y2="3" />
      <line x1="1" x2="7" y1="14" y2="14" />
      <line x1="9" x2="15" y1="8" y2="8" />
      <line x1="17" x2="23" y1="16" y2="16" />
    </svg>
  )
}
