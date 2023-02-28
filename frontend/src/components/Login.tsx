import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

export const Login = () => {
    return (
        <div className="container px-5 w-full flex flex-col items-center">
            <div className="my-7">
                <h3 className="font-semibold text-font text-lg leading-6 mb-3.5">
                    Join thousands of learners from around the world
                </h3>
                <p className="text-font leading-6">
                    Master web development by making real-life projects. There
                    are multiple paths for you to choose
                </p>
            </div>

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
                        />
                    </div>
                </div>
                <button className="rounded-lg py-1.5 bg-blueButton text-white">
                    Start coding now
                </button>
            </form>
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
                <p className="text-sm text-input text-center">
                    Already a member? <span className="text-login">Login</span>
                </p>
            </div>
        </div>
    );
};
