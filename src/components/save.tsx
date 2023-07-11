import { addDoc, collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { Button, Nav } from "react-bootstrap"
import {auth, db} from "../config/firebase";
import { useVillageState } from "../util/villageContext";
import { useAuthState } from "react-firebase-hooks/auth";

export const Save = () => {

    const [user] = useAuthState(auth);
    const saveRef = collection(db, "villages");
    const {villageState, setVillageState} = useVillageState();
    

    const save = async () => {
        if (!user) {return};
        const villageQuery = query(saveRef, where("uid", "==", user?.uid));
        //Query the database for all village saves with same uid, should be 1 or 0
        const villageQueryData = await getDocs(villageQuery);
        //If query finds 0 docs, no save data yet, so add doc
        if (villageQueryData.docs.length == 0) {
            await addDoc(saveRef, {
                uid: user?.uid,
                data: JSON.stringify(villageState)
            });
        //If query finds 1 doc, save data exists, so update
        } else if (villageQueryData.docs.length == 1) {
            await setDoc(doc(saveRef, villageQueryData.docs[0]?.id), {
                uid: user?.uid,
                data: JSON.stringify(villageState)
            });
        }
    }

    return <Nav.Link className="text-primary" onClick={save}>Save!</Nav.Link>;
}