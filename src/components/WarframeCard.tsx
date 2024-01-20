import Link from "next/link"
import { Sword } from "lucide-react"

import { WarframeType } from "@/types/warframeType"
import Button from "./Button"

interface WarframeCardProps {
  warframe: WarframeType
}

const WarframeCard: React.FC<WarframeCardProps> = ({ warframe }) => {
  return (
    <div className="bg-[#1F1F1F] h-[100%] text-white border-[#3F3F3F] border-opacity-50 border-2 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
      <div className="flex flex-col gap-2 justify-center items-center bg-[#2F2F2F] p-4">
          <h1 className="text-xl font-bold">{warframe.name}</h1>
          <Sword />
      </div>
      <div className=" px-4 py-4 flex flex-col gap-5 justify-evenly">
        <div className="flex flex-col flex-1 min-h-[120px]">
          <h1>Name: {warframe.name}</h1>
          <h1>Description: {warframe.description.slice(0, 100)}...</h1>
        </div>
        <div className="flex justify-between flex-1">
          <h1 className="p-0 m-0">Price: ${warframe.buildPrice}</h1>
          <Link className="" href={`/${warframe.name}`}>
            <Button>View Details</Button>
          </Link>
        </div>
          
      </div>
    </div>
  )
}
export default WarframeCard
