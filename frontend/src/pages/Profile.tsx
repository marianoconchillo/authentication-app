import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Profile = () => {
    const navigate = useNavigate();

    const {
        authState: { user },
    } = useContext(AuthContext);

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    return (
        <div>
            <h2>Hola Mundo</h2>
        </div>
    );
};
