import { Nav } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

export const Signout = () => {

    const navigate = useNavigate();

    const signUserOut = async () => {
        await auth.signOut();
        navigate("/");
    }

    return (
        <Nav.Link onClick={signUserOut} className="text-primary">Sign Out!</Nav.Link>
    );

}