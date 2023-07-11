import { Resource } from "../../util/resources"

export interface IndustryBuildingCostInterface {
    resource: Resource,
    factor: number,
    start: number
}
export interface IndustryBuildingCostsInterface {
    [Resource.food]: IndustryBuildingCostInterface[],
    [Resource.wood]: IndustryBuildingCostInterface[],
    [Resource.stone]: IndustryBuildingCostInterface[]
}

export const IndustryBuildingCosts = {
    [Resource.food]: [
        {
            resource: Resource.wood,
            factor: 10,
            start: 1
        },
        {
            resource: Resource.stone,
            factor: 10,
            start: 1
        }
    ],
    [Resource.wood]: [
        {
            resource: Resource.wood,
            factor: 10,
            start: 1
        },
        {
            resource: Resource.stone,
            factor: 10,
            start: 1
        }
    ],
    [Resource.stone]: [
        {
            resource: Resource.wood,
            factor: 10,
            start: 1
        },
        {
            resource: Resource.stone,
            factor: 10,
            start: 1
        }
    ]
}