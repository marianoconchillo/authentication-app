import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { FormLogin } from "../components/FormLogin";
import { Navbar } from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
    const navigate = useNavigate();

    const {
        authState: { user },
    } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            navigate("/profile");
        }
    }, [user, navigate]);

    const [loginForm, setLoginForm] = useState<boolean>(false);

    return (
        <div className="md:p-5">
            <div className="container min-h-fit mx-auto md:flex-none md:border md:rounded-lg md:w-2/3 lg:w-2/5">
                <Navbar />
                <div className="mb-5 md:mb-0">
                    <div className="container px-5 w-full flex flex-col items-center">
                        <div className="my-7 w-full">
                            {loginForm ? (
                                <h3 className="self-start font-semibold text-font text-lg leading-6">
                                    Login
                                </h3>
                            ) : (
                                <>
                                    <h3 className="font-semibold text-font text-lg leading-6 mb-3.5">
                                        Join thousands of learners from around
                                        the world
                                    </h3>
                                    <p className="text-font leading-6">
                                        Master web development by making
                                        real-life projects. There are multiple
                                        paths for you to choose
                                    </p>
                                </>
                            )}
                        </div>

                        <FormLogin loginForm={loginForm} />

                        <div className="mt-10 flex flex-col space-y-5">
                            <p className="text-sm text-input">
                                or continue with these social profile
                            </p>
                            <div className="flex justify-between">
                                <img
                                    src="/images/Google.svg"
                                    alt="Google SVG Image"
                                    className="cursor-pointer"
                                />
                                <img
                                    src="/images/Facebook.svg"
                                    alt="Google SVG Image"
                                    className="cursor-pointer"
                                />
                                <img
                                    src="/images/Twitter.svg"
                                    alt="Google SVG Image"
                                    className="cursor-pointer"
                                />
                                <img
                                    src="/images/Gihub.svg"
                                    alt="Google SVG Image"
                                    className="cursor-pointer"
                                />
                            </div>
                            <button
                                className="text-sm text-input text-center"
                                onClick={() => setLoginForm(!loginForm)}
                            >
                                {loginForm ? (
                                    <>
                                        Don't have an account yet?{" "}
                                        <span className="text-login">
                                            Register
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        Already a member?{" "}
                                        <span className="text-login">
                                            Login
                                        </span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};
