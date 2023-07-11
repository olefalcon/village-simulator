import { Button, Card } from "react-bootstrap";

export const Townhall = () => {
    return (
        <Card>
            <Card.Header>Town Hall</Card.Header>
            <Card.Body>
                <Card.Text>
                    Level 1 &nbsp;
                    <Button size='sm'>Upgrade</Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}