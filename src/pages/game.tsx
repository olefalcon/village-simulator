import { Container } from 'react-bootstrap';
import { Gamebar } from "../components/gamebar";
import { Topbar } from "../components/topbar"
import { VillageStateManager } from "../util/villageStateManager"
import { HarvestTimer } from '../components/harvestTimer';


export const Game = () => {
    return (
        <Container>
            <VillageStateManager />
            <Topbar />
            <HarvestTimer />
            <Gamebar />
        </Container>  
    );
}