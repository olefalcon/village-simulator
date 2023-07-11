import { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { VillageStateInterface, useVillageState } from '../util/villageContext';
import { IndustryInterface } from '../util/industryInterface';
import { ResourcesInterface } from '../util/resources';

export const HarvestTimer = () => {

    const [harvestTimer, setHarvestTimer] = useState(0);
    const {villageState, setVillageState} = useVillageState();

    const harvest = () => {
        setHarvestTimer(0);
        const industries = villageState?.industries as IndustryInterface[];
        let newResources = villageState?.resources as ResourcesInterface;
        industries.map((industry) => {
            const harvestAmount = industry.workers*industry.buildings**industry.tech_level;
            const newAmount = ((villageState.resources as ResourcesInterface)[industry.good as keyof ResourcesInterface] || 0) + harvestAmount;
            newResources[industry.good as keyof ResourcesInterface] = newAmount;
        });
        const newState = {...villageState, resources: {...villageState.resources, newResources}} as Partial<VillageStateInterface>
        setVillageState(newState);
    }

    useEffect(() => {
        harvestTimer < 100 && setTimeout(() => setHarvestTimer(harvestTimer + 20), 1000);
        harvestTimer === 100 && harvest();
      }, [harvestTimer]);

    return (
        <ProgressBar now={harvestTimer}/>
    );

}

