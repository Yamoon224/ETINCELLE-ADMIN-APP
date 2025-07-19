import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, LinkIcon } from "lucide-react"
import Image from "next/image"

export default function DetailsAnnoncePage() {
  return (
    <DashboardLayout>
      <div className="flex h-full">
        <div className="w-[350px] border-r p-6">
          <Card className="mb-4">
            <CardContent className="p-4 text-center">
              <h2 className="text-xl font-medium">Annonces</h2>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardContent className="p-4 text-center">
              <p className="text-gray-500">Notification push</p>
            </CardContent>
          </Card>

          <Card className="bg-red-50">
            <CardContent className="p-4 text-center">
              <p className="text-red-500">Annonce flottant</p>
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

          <Card className="mb-6">
            <CardContent className="p-4 flex justify-between items-center">
              <h3 className="text-lg font-medium">Details Annonces flottante</h3>
              <Button variant="outline">Modifier</Button>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-amber-400 rounded-lg p-4 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">SPECIAL ORDINATEUR</h2>
                <div className="bg-black text-white inline-block px-4 py-1 mb-4">
                  <span>DES</span>
                  <span className="block text-xs">REDUCTIONS À 60% SUR LES ORDINATEURS DAYMOND DISTRIBUTION</span>
                </div>
                <p className="text-sm mb-1">DAYMOND DÉDIE UN MOIS SPÉCIAL ORDINATEUR</p>
                <p className="text-xl font-bold mb-4">DU 01 AU 31 AOUT 2022</p>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Ordinateurs"
                    width={300}
                    height={200}
                    className="w-full max-w-xs"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  value="Spécial ordinateur"
                  className="w-full p-4 border border-gray-200 rounded-lg"
                  readOnly
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  value="https://www.figma.com/design/"
                  className="w-full p-4 border border-gray-200 rounded-lg pr-12"
                  readOnly
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <LinkIcon className="h-5 w-5 text-gray-400" />
                </button>
              </div>

              <div>
                <input
                  type="text"
                  value="RESTAURANT, HOTEL, TOUT"
                  className="w-full p-4 border border-gray-200 rounded-lg"
                  readOnly
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input type="text" value="TOUT" className="w-full p-4 border border-gray-200 rounded-lg" readOnly />
                <input type="text" value="TOUT" className="w-full p-4 border border-gray-200 rounded-lg" readOnly />
              </div>

              <textarea
                value="RAS"
                className="w-full p-4 border border-gray-200 rounded-lg h-32 resize-none"
                readOnly
              ></textarea>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-xs text-gray-500 text-center mb-1">DISTRIBUÉE</p>
                  <p className="text-center font-medium">1 562</p>
                </div>
                <div className="bg-gradient-to-r from-red-500 to-purple-600 p-4 rounded-lg">
                  <p className="text-xs text-white text-center mb-1">VUES</p>
                  <p className="text-center font-medium text-white">562</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
