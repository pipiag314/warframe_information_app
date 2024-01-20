// Warframe types
export interface WarframeType {
    name: string;
    description: string;
    armor: number;
    health: number;
    buildPrice: number;
    abilities: WarframeAbility[];
    type: string;
    isPrime: boolean;
}



// warframe's Ability types
export interface WarframeAbility {
    uniqueName: string;
    name: string;
    description: string;
}
