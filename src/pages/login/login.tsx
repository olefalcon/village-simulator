import { Button, Col, Container, Row } from "react-bootstrap";
import { LoginForm } from "./loginForm"
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { RegisterForm } from "./registerForm";
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth, db} from '../../config/firebase'
import { collection, getDocs, query, where } from "firebase/firestore";
import { VillageStateInterface, useVillageState } from "../../util/villageContext";



export const Login = () => {
    const navigate = useNavigate();
    const [showRegister, setShowRegister] = useState(true);
    const [user, loading] = useAuthState(auth);

    const saveRef = collection(db, "villages");
    const {villageState, setVillageState} = useVillageState();
    const villageQuery = query(saveRef, where("uid", "==", user?.uid || ''));

    useEffect(() => {
        if (loading) return;
        if (user) {loadVillageState();};
      }, [user, loading]);

    const loadVillageState = async () => {
        const villageQueryData = await getDocs(villageQuery);
        if (villageQueryData.docs.length == 1) setVillageState(JSON.parse(villageQueryData.docs[0].data()?.data) as Partial<VillageStateInterface>);
        navigate("/game");
    }

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col sm={12} lg={6}>
                    {loading && <p>Loading...</p>}
                    {!showRegister && !loading && !user && (<>
                    <LoginForm />
                    <p>Want to create a new account? Register <a className="text-primary" onClick={() => setShowRegister(true)}>here</a></p>
                    </>)}
                    {showRegister && !loading && !user && (<>
                    <RegisterForm />
                    <p>Already have an account? Login <a className="text-primary" onClick={() => setShowRegister(false)}>here</a></p>
                    </>)}
                </Col>
            </Row>
        </Container>
    );
}