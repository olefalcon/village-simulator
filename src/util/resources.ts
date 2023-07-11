export interface ResourcesInterface {
    [Resource.gold]: number,
    [Resource.gems]: number,
    [Resource.wood]: number,
    [Resource.stone]: number,
    [Resource.food]: number
}

export interface ResourceInterface {
    name: string,
    amount: number,
    icon: string
}

export enum Resource {
    gold,
    gems,
    wood,
    stone,
    food
}

export const GetResourceName = (resource: Resource) => {
    switch(resource) {
        case Resource.gold: return "Gold";
        case Resource.gems: return "Gems";
        case Resource.wood: return "Wood";
        case Resource.stone: return "Stone";
        case Resource.food: return "Food";
    }
}
export const GetResourceIcon = (resource: Resource) => {
    switch(resource) {
        case Resource.gold: return "gold.jpg";
        case Resource.gems: return "gems.jpg";
        case Resource.wood: return "wood.jpg";
        case Resource.stone: return "stone.jpg";
        case Resource.food: return "food.jpg";
    }
}