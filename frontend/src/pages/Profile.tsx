import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EditUserInfo } from "../components/EditUserInfo";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { UserInfo } from "../components/UserInfo";
import { AuthContext } from "../context/AuthContext";

export const Profile = () => {
    const navigate = useNavigate();

    const [edit, setEdit] = useState<boolean>(false);

    const {
        authState: { user },
    } = useContext(AuthContext);

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    return (
        <>
            <Navbar />
            <div className="my-10">
                {!edit ? (
                    <UserInfo setEdit={setEdit} />
                ) : (
                    <EditUserInfo setEdit={setEdit} />
                )}
            </div>
            <Footer />
        </>
    );
};
