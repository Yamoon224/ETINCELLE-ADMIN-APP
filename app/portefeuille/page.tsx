"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { useApp } from "@/lib/contexts/app-context"

export default function PortefeuillePage() {
  const { t } = useApp()

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-red-500 to-purple-600 text-white overflow-hidden">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-2">{t("totalBalance")}</h2>
              <div className="flex items-end gap-4">
                <div>
                  <p className="text-5xl font-bold">52 000</p>
                  <p className="text-sm mt-1">{t("today")}</p>
                </div>
                <div className="bg-white/20 px-3 py-1 rounded text-sm">CFA</div>
                <div className="ml-auto bg-white/20 px-3 py-1 rounded text-sm">17 000</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-xl font-medium mb-4">Trensaction</h2>

        <div className="space-y-4">
          {[1, 2].map((i) => (
            <Card key={i} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-red-800 flex items-center justify-center">
                    <span className="text-white text-xs">Restaurant</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Resto le Brenuss</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="inline-block w-4 h-3 bg-orange-500 mr-1"></span>
                      <span>Abidjan, Cocody</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Categories: Restaurant</p>
                  </div>

                  <div className="ml-auto grid grid-cols-3 gap-8">
                    <div>
                      <p className="text-sm text-muted-foreground">Compagnie</p>
                      <p className="font-medium">{i === 1 ? "WAVE" : "ORANGE MONEY"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Numéro de facture</p>
                      <p className="font-medium">HCY-8714339</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Payé le</p>
                      <p className="font-medium">23/09/2024</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Montant Payé</p>
                      <p className="font-medium text-green-500">6,99 €</p>
                    </div>
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
