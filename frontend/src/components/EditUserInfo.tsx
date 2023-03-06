import { useContext, useState } from "react";
import Dropzone from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faCamera,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../context/User/UserContext";
import { useForm } from "../hooks/useForm";
import { Loading } from "./Loading";

interface Props {
    setEdit: (value: boolean) => void;
}

type FormFields = {
    pictureUrl: string;
    name: string;
    bio: string;
    phone: string;
    password: string;
};

export const EditUserInfo = ({ setEdit }: Props) => {
    const { userState, updateProfile } = useContext(UserContext);

    const { state: form, onChange } = useForm<FormFields>({
        pictureUrl: userState.user?.pictureUrl || "",
        name: userState.user?.name || "",
        bio: userState.user?.bio || "",
        phone: userState.user?.phone || "",
        password: "",
    });

    const handleEditClick = (e: any) => {
        e.preventDefault();
        const { name, bio, phone, password } = form;
        updateProfile(name, bio, phone, password);
    };

    const [file, setFile] = useState<File | null>(null);

    const handleDrop = (acceptedFiles: File[]) => {
        setFile(acceptedFiles[0]);
    };

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
                    <div>
                        {form.pictureUrl ? (
                            <img
                                className="object-cover h-48 w-96 "
                                src={form.pictureUrl}
                            />
                        ) : file ? (
                            <div className="flex items-center space-x-5">
                                <h4 className="text-input italic text-sm">
                                    {file.name}
                                </h4>
                                <FontAwesomeIcon
                                    icon={faXmark}
                                    className="text-red-500 border px-3 py-1 rounded cursor-pointer"
                                    onClick={() => setFile(null)}
                                />
                            </div>
                        ) : (
                            <div className="flex items-center space-x-5">
                                <div className="border-2 border-dashed w-20 h-20 flex justify-center items-center cursor-pointer">
                                    <Dropzone onDrop={handleDrop}>
                                        {({ getRootProps, getInputProps }) => (
                                            <div {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                <FontAwesomeIcon
                                                    icon={faCamera}
                                                    size="2x"
                                                    className="text-input"
                                                />
                                            </div>
                                        )}
                                    </Dropzone>
                                </div>
                                <h4 className="text-input">CHANGE PHOTO</h4>
                            </div>
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
