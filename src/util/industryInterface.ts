import { Resource } from "./resources"

export interface IndustryInterface {
    good: Resource,
    flavor: IndustryFlavorInterface,
    buildings: number,
    tech_level: number,
    workers: number,
}

export interface IndustryFlavorInterface {
    good: string,
    building_name: string,
    worker_name: string,
    image: string
}