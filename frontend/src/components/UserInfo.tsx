import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../context/User/UserContext";

interface Props {
    setEdit: (value: boolean) => void;
}

export const UserInfo = ({ setEdit }: Props) => {
    const {
        userState: { user },
    } = useContext(UserContext);

    return (
        <>
            <div className="mt-5 mb-10 space-y-2">
                <h2 className="font-medium text-2xl text-center">
                    Personal info
                </h2>
                <h3 className="font-extralight text-lg text-center ">
                    Basic info, like your name and photo
                </h3>
            </div>
            <div className="w-full px-5 flex flex-col divide-y space-y-3 lg:w-3/5 md:container md:border md:rounded-lg md:mx-auto md:px-10 md:pt-5">
                {/* Row 1 */}
                <div className="flex justify-between items-center h-20">
                    <div className="flex flex-col items-start space-y-2">
                        <h2 className="font-medium text-xl text-center">
                            Profile
                        </h2>
                        <h4 className="text-input font-medium text-sm md:text-base">
                            Some info may be visible to other people
                        </h4>
                    </div>
                    <div className="flex flex-col items-end justify-center !border-t-0">
                        <button
                            className="text-font font-medium border-2 rounded-xl px-8 py-2 text-sm md:text-base"
                            onClick={() => setEdit(true)}
                        >
                            Edit
                        </button>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex justify-between items-center h-20 text-sm md:text-base">
                    <h4 className="text-input font-medium opacity-60">PHOTO</h4>
                    <div className="flex flex-col items-end md:items-start justify-center">
                        {user?.pictureUrl ? (
                            <img
                                className="h-16 w-16 rounded mt-1.5"
                                src={user.pictureUrl}
                            />
                        ) : (
                            <FontAwesomeIcon
                                icon={faUser}
                                size="lg"
                                className="text-input border-2 rounded-lg px-8 py-2"
                            />
                        )}
                    </div>
                </div>

                {/* Row 3 */}
                <div className="flex justify-between items-center h-20 text-sm md:text-base">
                    <h4 className="text-input font-medium opacity-60">NAME</h4>
                    <div className="flex flex-col items-end md:items-start justify-center">
                        <h4 className="font-medium opacity-90 text-end">
                            {user?.name}
                        </h4>
                    </div>
                </div>

                {/* Row 4 */}
                <div className="flex justify-between items-center h-20 text-sm md:text-base">
                    <h4 className="text-input font-medium opacity-60">BIO</h4>
                    <div className="flex flex-col items-end md:items-start justify-center">
                        <h4 className="font-medium opacity-90">{user?.bio}</h4>
                    </div>
                </div>

                {/* Row 5 */}
                <div className="flex justify-between items-center h-20 text-sm md:text-base">
                    <h4 className="text-input font-medium opacity-60">PHONE</h4>
                    <div className="flex flex-col items-end md:items-start justify-center">
                        <h4 className="font-medium opacity-90">
                            {user?.phone}
                        </h4>
                    </div>
                </div>

                {/* Row 6 */}
                <div className="flex justify-between items-center h-20 text-sm md:text-base">
                    <h4 className="text-input font-medium opacity-60">EMAIL</h4>
                    <div className="flex flex-col items-end md:items-start justify-center">
                        <h4 className="font-medium opacity-90">
                            {user?.email}
                        </h4>
                    </div>
                </div>

                {/* Row 7 */}
                <div className="flex justify-between items-center h-20 text-sm md:text-base">
                    <h4 className="text-input font-medium opacity-60">
                        PASSWORD
                    </h4>
                    <div className="flex flex-col items-end md:items-start justify-center">
                        <h4 className="font-medium opacity-90">**********</h4>
                    </div>
                </div>
            </div>

            {/* <div className="px-5 grid grid-rows-6 grid-cols-6 gap-y-2 divide-y lg:w-3/5 md:container md:border md:rounded-lg md:mx-auto md:px-10 md:pt-5 ">

                <div className="flex flex-col items-start space-y-2 col-span-4">
                    <h2 className="font-medium text-xl text-center">Profile</h2>
                    <h4 className="text-input font-medium">
                        Some info may be visible to other people
                    </h4>
                </div>
                <div className="flex flex-col items-end justify-center col-span-2 !border-t-0">
                    <button
                        className="text-font font-medium border-2 rounded-xl px-8 py-2 "
                        onClick={() => setEdit(true)}
                    >
                        Edit
                    </button>
                </div>


                <div className="flex items-center col-span-3">
                    <h4 className="text-input font-medium opacity-60">PHOTO</h4>
                </div>
                <div className="flex flex-col items-end md:items-start justify-center col-span-3">
                    {user?.pictureUrl ? (
                        <img
                            className="h-16 w-16 rounded mt-1.5"
                            src={user.pictureUrl}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faUser}
                            size="lg"
                            className="text-input border-2 rounded-lg px-8 py-2"
                        />
                    )}
                </div>


                <div className="flex items-center col-span-3">
                    <h4 className="text-input font-medium opacity-60">NAME</h4>
                </div>
                <div className="flex flex-col items-end md:items-start justify-center col-span-3">
                    <h4 className="font-medium opacity-90 text-end">
                        {user?.name}
                    </h4>
                </div>


                <div className="flex items-center col-span-3">
                    <h4 className="text-input font-medium opacity-60">BIO</h4>
                </div>
                <div className="flex flex-col items-end md:items-start justify-center col-span-3">
                    <h4 className="font-medium opacity-90">{user?.bio}</h4>
                </div>


                <div className="flex items-center col-span-3">
                    <h4 className="text-input font-medium opacity-60">EMAIL</h4>
                </div>
                <div className="flex flex-col items-end md:items-start justify-center col-span-3">
                    <h4 className="font-medium opacity-90">{user?.email}</h4>
                </div>


                <div className="flex items-center col-span-3">
                    <h4 className="text-input font-medium opacity-60">
                        PASSWORD
                    </h4>
                </div>
                <div className="flex flex-col items-end md:items-start justify-center col-span-3 ">
                    <h4 className="font-medium opacity-90">**********</h4>
                </div>
            </div> */}
        </>
    );
};
