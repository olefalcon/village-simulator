import {Button} from 'react-bootstrap'
import { SetGold } from '../util/villageStateManager';
import { VillageStateInterface, useVillageState } from '../util/villageContext';
import { Resource } from '../util/resources';

export const Tax = () => {
    const {villageState, setVillageState} = useVillageState();
    const tax = () => {
        let newGold = (villageState?.resources?.[Resource.gold] || 0) + 1;
        let newState = {...villageState, resources: {...villageState.resources, gold: newGold}} as Partial<VillageStateInterface>
        setVillageState(newState);
    }
    return (
        <Button onClick={tax}>
            Tax!
        </Button>
    );
}