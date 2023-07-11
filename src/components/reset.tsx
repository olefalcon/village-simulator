import { Nav } from "react-bootstrap";
import { useVillageState } from "../util/villageContext";
import { initVillageState } from "../util/initVillageState";

export const Reset = () => {

    const {villageState, setVillageState} = useVillageState();

    const reset = () => {
        setVillageState(initVillageState);
    }

    return <Nav.Link className="text-primary" onClick={reset}>Reset!</Nav.Link>
}
