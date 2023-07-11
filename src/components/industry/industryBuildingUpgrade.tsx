import { Button, Badge } from "react-bootstrap";
import { IndustryInterface } from "../../util/industryInterface";
import { GetResourceName, ResourcesInterface } from "../../util/resources";
import { IndustryBuildingCostInterface, IndustryBuildingCosts, IndustryBuildingCostsInterface } from './industryBuildingCosts';
import { VillageStateInterface, useVillageState } from "../../util/villageContext";


export const IndustryBuildingUpgrade = (props: {industry: IndustryInterface}) => {
  
    const costsArray = (IndustryBuildingCosts as IndustryBuildingCostsInterface)[props.industry.good as keyof IndustryBuildingCostsInterface];
    const {villageState, setVillageState} = useVillageState();

    const getUpgradeCost = (resource: IndustryBuildingCostInterface) => {
        return 10 * resource?.factor * props.industry.buildings;
    }

    const upgrade = () => {
        //Prepare remove resources
        const newResources = villageState.resources as ResourcesInterface;
        costsArray.map((resource) => {
            const upgradeCost = getUpgradeCost(resource);
            const resourceAmount = (villageState?.resources as ResourcesInterface)[props.industry.good as keyof ResourcesInterface]
            newResources[resource.resource as keyof ResourcesInterface] = resourceAmount-upgradeCost;
        })
        //Prepare upgrading building level
        const newIndustries = (villageState.industries as IndustryInterface[]).map((industry) => {
            return industry === props.industry ? {...industry, buildings: industry.buildings+1} : {...industry}
        });
        //Set new village state
        const newState = {...villageState, resources: newResources, industries: newIndustries} as Partial<VillageStateInterface>;
        setVillageState(newState);
        console.log("upgrade");
    }

    return (
        <Button onClick={upgrade} size={'sm'}>
            Upgrade &nbsp;
            <>
            {costsArray.map((resource) => {
                const upgradeCost = getUpgradeCost(resource);
                const resourceAmount = (villageState?.resources as ResourcesInterface)[resource.resource]
                return <Badge bg={resourceAmount >= upgradeCost ? 'success' : 'danger'}>{upgradeCost} {GetResourceName(resource?.resource)}</Badge>;
            })}
            </>
        </Button>
    );
}