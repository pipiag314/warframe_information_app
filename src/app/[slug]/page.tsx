import { getSingleWarframe } from "@/api/getWarframes"
import { Heart, Shield } from "lucide-react"

import { WarframeType } from "@/types/warframeType"

const SingleWarframePage = async ({ params }: any) => {
  const warframe = (await getSingleWarframe(params.slug)) as WarframeType

  return (
    <div className="flex text-white flex-col items-center justify-center py-2 ">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <div className="max-w-md w-full bg-[#1F1F1F] mx-auto m-2 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="flex justify-center">
              <div className="p-8">
                <h1 className="uppercase tracking-wide text-xl font-semibold">
                  {warframe.name}
                </h1>
                <p className="mt-2 text-gray-500">
                  {warframe.description}
                </p>
                <div className="mt-4">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-gray-500" />
                      <p className="ml-2">Armor: {warframe.armor}</p>
                    </div>
                    <div className="flex items-center ml-6">
                      <Heart className="h-5 w-5 text-gray-500" />
                      <p className="ml-2">Health: {warframe.health}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-md py-5 bg-[#1F1F1F] w-full mx-auto m-2 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <h1 className="text-2xl ">Abilities:</h1>
            <div>
              <div className="grid gap-5">

                {warframe.abilities.map((ability, index) => (
                  <div className="flex flex-col justify-start">
                    <h3 className="font-bold">{index+1}. {ability.name}</h3>
                    <p>{ability.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default SingleWarframePage
