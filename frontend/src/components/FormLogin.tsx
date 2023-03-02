import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "../hooks/useForm";
import { AuthContext } from "../context/AuthContext";
import { Loading } from "./Loading";

interface Props {
    loginForm: boolean;
}

type FormFields = {
    email: string;
    password: string;
};

export const FormLogin = ({ loginForm }: Props) => {
    const { state: form, onChange } = useForm<FormFields>({
        email: "",
        password: "",
    });

    const { login, register, authState } = useContext(AuthContext);

    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

    const emailRegex =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    const handleClick = (e: any) => {
        e.preventDefault();
        if (emailRegex.test(form.email)) {
            setIsEmailValid(true);
            loginForm
                ? login(form.email, form.password)
                : register(form.email, form.password);
        } else {
            setIsEmailValid(false);
        }
    };

    return (
        <form className="flex flex-col space-y-6 w-full">
            <div className="flex flex-col space-y-3">
                <div className="w-full flex items-center py-3 border rounded-lg px-5 space-x-3">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        size="lg"
                        className="text-input"
                    />
                    <input
                        placeholder="Email"
                        className="w-full bg-transparent focus:outline-none"
                        type="email"
                        onChange={(value) =>
                            onChange(value.target.value, "email")
                        }
                    />
                </div>
                <div className="w-full flex items-center py-3 border rounded-lg px-5 space-x-3">
                    <FontAwesomeIcon
                        icon={faLock}
                        size="lg"
                        className="text-input"
                    />
                    <input
                        placeholder="Password"
                        className="w-full bg-transparent focus:outline-none"
                        type="password"
                        onChange={(value) =>
                            onChange(value.target.value, "password")
                        }
                    />
                </div>
            </div>
            <button
                className="rounded-lg py-1.5 bg-blueButton text-white font-bold"
                onClick={handleClick}
                disabled={form.email === "" || form.password === ""}
            >
                {loginForm ? `Login` : `Start coding now`}
            </button>

            {authState.isLoading && <Loading />}

            {authState.error && isEmailValid && (
                <p className="text-sm mt-5 text-red-500 text-center">
                    {authState.error}
                </p>
            )}

            {!isEmailValid && (
                <p className="text-sm text-red-500 text-center">
                    Please enter a valid email address
                </p>
            )}
        </form>
    );
};
