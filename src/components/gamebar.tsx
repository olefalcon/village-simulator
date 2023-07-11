import { Tab, Tabs } from "react-bootstrap";
import { GovtPanel } from "./government/government";
import { IndustryPanel } from "./industry/industryPanel";
import { Tax } from "./tax";

export const Gamebar = () => {
    return (
        <Tabs defaultActiveKey="govt" id="gamebar-tabs">
        <Tab eventKey="govt" title="Government">
          <GovtPanel />
        </Tab>
        <Tab eventKey="industry" title="Industry">
          <IndustryPanel />
        </Tab>
        <Tab eventKey="economy" title="Economy">
          <Tax />
        </Tab>
      </Tabs>
    );
}