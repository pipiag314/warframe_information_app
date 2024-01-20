import { FilterType } from "@/types/filterOpt"
import { WarframeType } from "@/types/warframeType"

export const filterWarframes = (array: WarframeType[], filterOption: FilterType) => {
    if(filterOption === "All") {
        return array;
    }
    
    if(filterOption === "Prime") {
        const filteredArray = array.filter(item => item.isPrime === true)        
        return filteredArray;
    }

    if(filterOption === "Warframes") {
        const filteredArray = array.filter(item => item.type === "Warframe")
        return filteredArray;
    }

    if(filterOption === "Archwings") {
        const filteredArray = array.filter(item => item.type === "Archwing")
        return filteredArray;
    }
}

