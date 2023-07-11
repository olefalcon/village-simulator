import { IndustryInterface } from "../../util/industryInterface";
import { useVillageState } from "../../util/villageContext";
import { Industry } from "./industry";

export const IndustryPanel = () => {

    const {villageState} = useVillageState();

    return (
        <>
        {villageState?.industries && villageState.industries.map(
            (industry) => <Industry industry={industry as IndustryInterface}/>
        )}
        </>
    )

}