"use client"
import { useEffect, useState } from "react"
import { getWarframes } from "@/api/getWarframes"
import { FilterType } from "@/types/filterOpt"
import { WarframeType } from "@/types/warframeType"
import { filterWarframes } from "@/lib/data"
import Button from "./Button"
import WarframeCard from "./WarframeCard"


const AllWarframes = () => {
  const [warframes, setWarframes] = useState<WarframeType[] | null>(null)
  const [filteredWarframes, setFilteredWarframes] = useState<
    WarframeType[] | null
  >(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWarframes()
        setWarframes(data)
        setFilteredWarframes(data)
      } catch (error) {
        console.log("Error: ", error)
      }
    }
    fetchData()
  }, [])

  const handleClick = (filterBy: FilterType) => {
      if(!warframes) return;
      const filtered = filterWarframes(warframes, filterBy)

      if(!filtered) return; 
      setFilteredWarframes(filtered)
  }

  return (
    <>
      <div>
        <div className="p-5">
          <h2 className="text-white font-bold text-lg">Filter By:</h2>
          <div className="flex gap-3">
            <Button onClick={() => handleClick("All")}>All</Button>
            <Button onClick={() => handleClick("Warframes")}>Warframes</Button>
            <Button onClick={() => handleClick("Prime")}>Prime</Button>
            <Button onClick={() => handleClick("Archwings")}>Archwings</Button>
          </div>
        </div>
      </div>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredWarframes?.map((warframe: WarframeType) => (
          <WarframeCard key={warframe.name} warframe={warframe} />
        ))}
      </div>
    </>
  )
}
export default AllWarframes
