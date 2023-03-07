import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faCaretDown,
    faCaretUp,
    faCircleUser,
    faUsers,
    faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../context/User/UserContext";

export const Navbar = () => {
    const {
        userState: { user },
        logout,
    } = useContext(UserContext);

    const [click, setClick] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="w-full pt-5 px-5 flex justify-between md:px-10">
            <img
                className="inline "
                src="/images/devchallenges.svg"
                alt="DevChallenges logo"
            />

            {user && (
                <div className="relative w-full flex justify-end space-y-14">
                    <div className="flex items-center space-x-3">
                        {user?.pictureUrl ? (
                            <img
                                className="h-9 w-9 rounded"
                                src={user.pictureUrl}
                            />
                        ) : (
                            <div className="border px-3 py-2 rounded-lg">
                                <FontAwesomeIcon
                                    icon={faUser}
                                    size="lg"
                                    className="text-input"
                                />
                            </div>
                        )}
                        <div className="hidden md:flex items-center space-x-5">
                            <h4 className="text-sm font-semibold opacity-90">
                                {user?.name}
                            </h4>
                            <FontAwesomeIcon
                                onClick={() => setClick(!click)}
                                icon={click ? faCaretUp : faCaretDown}
                                color="#333333"
                                cursor="pointer"
                            />
                        </div>
                    </div>
                    {click && (
                        <div className="hidden md:block right-0 py-1 shadow absolute mt-3 border rounded-lg divide-y divide-gray-100">
                            <ul className="text-sm text-gray-700">
                                <li className="px-4 py-2 rounded hover:bg-gray-100 cursor-pointer flex items-center justify-start space-x-5">
                                    <FontAwesomeIcon
                                        icon={faCircleUser}
                                        size="lg"
                                    />
                                    <p>My Profile</p>
                                </li>
                                <li className="px-4 py-2 rounded hover:bg-gray-100 cursor-pointer flex items-center justify-start space-x-5">
                                    <FontAwesomeIcon icon={faUsers} />
                                    <p>Group Chat</p>
                                </li>
                            </ul>
                            <div className="text-sm text-red-500">
                                <button
                                    className="px-4 py-2 w-full rounded hover:bg-gray-100 cursor-pointer flex items-center justify-start space-x-5"
                                    onClick={handleLogout}
                                >
                                    <FontAwesomeIcon
                                        icon={faArrowRightFromBracket}
                                        size="lg"
                                    />
                                    <p>Logout</p>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
