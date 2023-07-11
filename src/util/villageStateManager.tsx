import {useContext} from 'react';
import { useVillageState } from './villageContext';
import { Resource } from './resources';

export const VillageStateManager = () => {
    return <></>;
}

export const SetGold = (value: number) => {
    const {villageState, setVillageState} = useVillageState();
    let newGold = (villageState?.resources?.[Resource.gold] || 0) + value;
    setVillageState((prev) => ({ ...prev, gold:newGold }));
}

export const SetGems = (value: number) => {
    const {villageState, setVillageState} = useVillageState();
    let newGems = (villageState?.resources?.[Resource.gems] || 0) + value;
    setVillageState((prev) => ({ ...prev, gems:newGems }));
}