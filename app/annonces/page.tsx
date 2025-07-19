"use client"

import type React from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, LinkIcon } from "lucide-react"
import { useApp } from "@/lib/contexts/app-context"
import Link from "next/link"

export default function AnnoncesPage() {
  const { t } = useApp()

  return (
    <DashboardLayout>
      <div className="flex h-full">
        <div className="w-[350px] border-r p-6">
          <Card className="mb-4">
            <CardContent className="p-4 text-center">
              <h2 className="text-xl font-medium">{t("announcements")}</h2>
            </CardContent>
          </Card>

          <Link href="/annonces/notification-push">
            <Card className="mb-4 bg-red-50 dark:bg-red-950 hover:bg-red-100 dark:hover:bg-red-900 cursor-pointer">
              <CardContent className="p-4 text-center">
                <p className="text-red-500">{t("notificationPush")}</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/annonces/annonce-flottant">
            <Card className="bg-red-50 dark:bg-red-950 hover:bg-red-100 dark:hover:bg-red-900 cursor-pointer">
              <CardContent className="p-4 text-center">
                <p className="text-red-500">{t("floatingAd")}</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <h2 className="text-xl font-medium">{t("enterprise")}</h2>
              <ChevronDown className="h-5 w-5 ml-2" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <span className="text-green-500 text-xl">+</span>
              </Button>
              <span className="text-xl">-</span>
            </div>
          </div>

          <Card className="mb-6">
            <CardContent className="p-4">
              <h3 className="text-lg font-medium">{t("createFloatingAd")}</h3>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">{t("addImage")}</h3>
              <p className="text-xs text-muted-foreground mb-4">{t("addImageFormat")}</p>

              <div className="border border-border rounded-lg h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 border border-border rounded-lg flex items-center justify-center">
                    <PlusImageIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder={t("productName")}
                  className="w-full p-4 border border-border rounded-lg bg-background"
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder={t("pasteLink")}
                  className="w-full p-4 border border-border rounded-lg pr-12 bg-background"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <LinkIcon className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder={t("targetEstablishment")}
                  className="w-full p-4 border border-border rounded-lg pr-12 bg-background"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={t("country")}
                  className="w-full p-4 border border-border rounded-lg bg-background"
                />
                <input
                  type="text"
                  placeholder={t("cities")}
                  className="w-full p-4 border border-border rounded-lg bg-background"
                />
              </div>

              <textarea
                placeholder={t("enterMessage")}
                className="w-full p-4 border border-border rounded-lg h-32 resize-none bg-background"
              ></textarea>

              <div className="flex justify-end">
                <Button className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-6">
                  {t("publish")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

function PlusImageIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      <path d="M12 12h.01v.01H12z" />
    </svg>
  )
}
