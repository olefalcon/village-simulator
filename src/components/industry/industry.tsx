import { Card, Col, Row, Image, Button, Badge } from "react-bootstrap";
import { Tax } from "../tax";
import { IndustryInterface } from "../../util/industryInterface";
import { VillageStateInterface, useVillageState } from "../../util/villageContext";
import { DashSquare, PlusSquare } from "react-bootstrap-icons";
import { IndustryBuildingUpgrade } from "./industryBuildingUpgrade";

export const Industry = (props: {industry: IndustryInterface}) => {
    
    const {villageState, setVillageState} = useVillageState();
    const industryWorkers = (villageState.industries as IndustryInterface[]).reduce((a,v) =>  a = a + (v.workers as number) , 0 )
    const availableWorkers = (villageState.population as number) - industryWorkers;

    const increaseWorkers = () => {
        if (availableWorkers > 0) {
            const oldWorkers = props.industry.workers;
            const newIndustries = (villageState.industries as IndustryInterface[]).map((industry) => {
                return industry === props.industry ? {...industry, workers: oldWorkers+1} : {...industry}
            });
            const newState = {...villageState, industries: newIndustries} as Partial<VillageStateInterface>
            setVillageState(newState)
        }
    }
    const decreaseWorkers = () => {
        const oldWorkers = props.industry.workers;
        if (oldWorkers > 0) {
            const newIndustries = (villageState.industries as IndustryInterface[]).map((industry) => {
                return industry === props.industry ? {...industry, workers: oldWorkers-1} : {...industry}
            });
            const newState = {...villageState, industries: newIndustries} as Partial<VillageStateInterface>
            setVillageState(newState)
        }
    }

    return (
        <Card>
            <Card.Header className='text-uppercase'>{props.industry.flavor.good}</Card.Header>
            <Card.Body>
                <Row>
                    <Col lg={3}>
                        <Image className='w-100' src={require('../../resources/images/' + props.industry.flavor.image)} />
                    </Col>
                    <Col lg={9}>
                        <Card.Text>
                            {props.industry.flavor.building_name} Level: {props.industry.buildings} <IndustryBuildingUpgrade industry={props.industry} /> <br />
                            Tech Level: {props.industry.tech_level}<br />
                            {props.industry.flavor.worker_name}: <DashSquare onClick={decreaseWorkers} /> {props.industry.workers} <PlusSquare onClick={increaseWorkers}/> / {availableWorkers}<br />    
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}