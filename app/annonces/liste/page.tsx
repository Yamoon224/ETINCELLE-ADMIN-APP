import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, MoreVertical, LinkIcon, Pencil } from "lucide-react"

export default function ListeAnnoncesPage() {
  return (
    <DashboardLayout>
      <div className="flex h-full">
        <div className="w-[350px] border-r p-6">
          <Card className="mb-4">
            <CardContent className="p-4 text-center">
              <h2 className="text-xl font-medium">Annonces</h2>
            </CardContent>
          </Card>

          <Card className="mb-4 bg-red-50">
            <CardContent className="p-4 text-center">
              <p className="text-red-500">Notification push</p>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardContent className="p-4 text-center">
              <p className="text-gray-500">Annonce flottant</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <h2 className="text-xl font-medium">Entreprise</h2>
              <ChevronDown className="h-5 w-5 ml-2" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <span className="text-green-500 text-xl">+</span>
              </Button>
              <span className="text-xl">-</span>
            </div>
          </div>

          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="h-16 w-16 bg-amber-400 rounded-md flex items-center justify-center">
                      <span className="text-white text-xs">SPECIAL</span>
                    </div>

                    <div className="ml-4">
                      <h3 className="font-medium">Spécial Ordinateur</h3>
                      <p className="text-xs text-gray-500">Jeudi 14 Janvier 2022</p>
                    </div>

                    {i === 2 && (
                      <div className="ml-4 flex items-center">
                        <span className="text-xs mr-2">2 ×</span>
                        <Pencil className="h-4 w-4" />
                      </div>
                    )}

                    {i === 3 && (
                      <div className="ml-4 flex items-center">
                        <LinkIcon className="h-4 w-4 mr-2" />
                        <span className="text-xs text-red-500">Annulée</span>
                      </div>
                    )}

                    <div className="ml-auto flex items-center gap-8">
                      <div>
                        <p className="text-xs text-gray-400 text-center">DISTRIBUÉE</p>
                        <p className="text-center">1 562</p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400 text-center">VUES</p>
                        <Button className="bg-green-500 text-white rounded-full px-4 py-1 text-sm">562</Button>
                      </div>
                    </div>

                    <button className="ml-4">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
