import { foodFlavor, stoneFlavor, woodFlavor } from "../components/industry/industryFlavor"
import { Resource } from "./resources"
export const initVillageState = {
    resources: {
        [Resource.gold]: 10,
        [Resource.gems]: 2,
        [Resource.wood]: 100,
        [Resource.stone]: 100,
        [Resource.food]: 100
    },
    industries: [
        {
            good: Resource.food,
            flavor: foodFlavor,
            buildings: 1,
            tech_level: 1,
            workers: 3,
        },
        {
            good: Resource.wood,
            flavor: woodFlavor,
            buildings: 1,
            tech_level: 1,
            workers: 3,
        },
        {
            good: Resource.stone,
            flavor: stoneFlavor,
            buildings: 1,
            tech_level: 1,
            workers: 3,
        },
    ],
    population: 20
}