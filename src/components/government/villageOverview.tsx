import { Card } from "react-bootstrap";
import { useVillageState } from "../../util/villageContext";

export const VillageOverview = () => {
    const {villageState} = useVillageState();

    return (
        <Card>
            <Card.Header>Village Overview</Card.Header>
            <Card.Body>
                <Card.Text>
                    Population - {villageState?.population}<br />
                    Economic Power - <br />
                    Military Power - <br />
                </Card.Text>
            </Card.Body>
        </Card>
    );
}