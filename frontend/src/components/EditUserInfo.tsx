import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faCamera } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../context/User/UserContext";
import { useForm } from "../hooks/useForm";
import { Loading } from "./Loading";

interface Props {
    setEdit: (value: boolean) => void;
}

type FormFields = {
    name: string;
    bio: string;
    phone: string;
    password: string;
};

export const EditUserInfo = ({ setEdit }: Props) => {
    const { userState, updateProfile } = useContext(UserContext);

    const { state: form, onChange } = useForm<FormFields>({
        name: userState.user?.name || "",
        bio: userState.user?.bio || "",
        phone: userState.user?.phone || "",
        password: "",
    });

    const handleEditClick = async (e: any) => {
        e.preventDefault();
        const { name, bio, phone, password } = form;

        const formData = new FormData();
        formData.append("file", file as File);
        formData.append("name", name);
        formData.append("bio", bio);
        formData.append("phone", phone);
        formData.append("password", password);

        await updateProfile(formData);
        setFile(null);
    };

    const [file, setFile] = useState<File | null>(null);

    return (
        <>
            <button
                className="px-5 mt-5 mb-10 flex items-center space-x-3 cursor-pointer md:container md:mx-auto md:px-0 lg:w-3/5"
                onClick={() => setEdit(false)}
            >
                <FontAwesomeIcon icon={faAngleLeft} color="#2D9CDB" />
                <p className="" style={{ color: "#2D9CDB" }}>
                    Back
                </p>
            </button>
            <div className="px-5 space-y-5 md:container md:border md:rounded-lg md:mx-auto md:px-10 md:py-5 lg:w-3/5 ">
                <div className="flex flex-col items-start space-y-2">
                    <h2 className="font-medium text-xl text-center">
                        Change Info
                    </h2>
                    <h4 className="text-input font-medium">
                        Changes will be reflected to every services
                    </h4>
                </div>
                <form className="flex flex-col space-y-5">
                    <div className="flex items-center space-x-5">
                        {userState.user?.pictureUrl ? (
                            <img
                                className="h-24 w-24 rounded"
                                src={userState.user.pictureUrl}
                            />
                        ) : (
                            <FontAwesomeIcon
                                icon={faCamera}
                                size="2x"
                                className="text-input"
                            />
                        )}
                        <label className="block cursor-pointer">
                            <span className="text-input">CHANGE PHOTO</span>
                            <input
                                type="file"
                                className="opacity-0 pointer-events-none absolute top-0 left-0 w-full h-full"
                                onChange={(value) =>
                                    setFile(value.target.files?.[0] || null)
                                }
                            />
                        </label>
                        {file && (
                            <h4 className="text-input italic text-sm">
                                {file.name}
                            </h4>
                        )}
                    </div>
                    <div>
                        <label className="text-label font-medium text-sm">
                            Name
                        </label>
                        <input
                            placeholder="Enter your name..."
                            className="mt-1.5 w-full bg-transparent focus:outline-none border border-gray-400 rounded-lg px-4 py-3 text-sm"
                            type="text"
                            value={form.name}
                            onChange={(value) =>
                                onChange(value.target.value, "name")
                            }
                        />
                    </div>
                    <div>
                        <label className="text-label font-medium text-sm">
                            Bio
                        </label>
                        <textarea
                            placeholder="Enter your bio..."
                            className="mt-1.5 w-full bg-transparent focus:outline-none border border-gray-400 rounded-lg px-4 py-3 text-sm resize-none"
                            rows={4}
                            value={form.bio}
                            onChange={(value) =>
                                onChange(value.target.value, "bio")
                            }
                        />
                    </div>
                    <div>
                        <label className="text-label font-medium text-sm">
                            Phone
                        </label>
                        <input
                            placeholder="Enter your phone..."
                            className="mt-1.5 w-full bg-transparent focus:outline-none border border-gray-400 rounded-lg px-4 py-3 text-sm"
                            type="text"
                            value={form.phone}
                            onChange={(value) =>
                                onChange(value.target.value, "phone")
                            }
                        />
                    </div>
                    <div>
                        <label className="text-label font-medium text-sm">
                            Password
                        </label>
                        <input
                            placeholder="Enter your new password..."
                            className="mt-1.5 w-full bg-transparent focus:outline-none border border-gray-400 rounded-lg px-4 py-3 text-sm"
                            type="password"
                            onChange={(value) =>
                                onChange(value.target.value, "password")
                            }
                        />
                    </div>
                    <button
                        className="rounded-lg py-2 px-10 bg-blueButton text-white font-bold self-center md:self-start"
                        onClick={handleEditClick}
                        disabled={
                            form.name === "" &&
                            form.bio === "" &&
                            form.phone === "" &&
                            form.password === ""
                        }
                    >
                        Save
                    </button>

                    {userState.isLoading && <Loading />}

                    {userState.error && (
                        <p className="text-sm mt-5 text-red-500 text-center">
                            {userState.error}
                        </p>
                    )}
                </form>
            </div>
        </>
    );
};
