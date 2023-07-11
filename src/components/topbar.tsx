import {ListGroup} from 'react-bootstrap';
import { useVillageState } from '../util/villageContext';
import { Save } from './save';
import { Reset } from './reset';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import { Signout } from './signout';
import { Resource } from '../util/resources';

export const Topbar = () => {

    const [user] = useAuthState(auth);
    const {villageState} = useVillageState();

    return (
        <>
            <ListGroup horizontal className='justify-content-center topbar'>
                <ListGroup.Item variant='secondary'>Gold - {villageState?.resources?.[Resource.gold]}</ListGroup.Item>
                <ListGroup.Item variant='secondary'>Gems - {villageState?.resources?.[Resource.gems]}</ListGroup.Item>
                <ListGroup.Item variant='secondary'>Wood - {villageState?.resources?.[Resource.wood]}</ListGroup.Item>
                <ListGroup.Item variant='secondary'>Stone - {villageState?.resources?.[Resource.stone]}</ListGroup.Item>
                <ListGroup.Item variant='secondary'>Food - {villageState?.resources?.[Resource.food]}</ListGroup.Item>
                <ListGroup.Item variant='secondary'><Save /></ListGroup.Item>
                <ListGroup.Item variant='secondary'><Reset /></ListGroup.Item>
                <ListGroup.Item variant='secondary'>{user?.email}</ListGroup.Item>
                <ListGroup.Item variant='secondary'><Signout /></ListGroup.Item>
            </ListGroup>
        </>
    );

}