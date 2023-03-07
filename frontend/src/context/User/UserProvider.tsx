import {
    FacebookAuthProvider,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
    UserCredential,
} from "firebase/auth";
import { useReducer } from "react";
import authApi from "../../api/authApi";
import { User } from "../../interfaces/User";
import { auth } from "../../services/firebaseConfig";
import { UserContext, UserState } from "./UserContext";
import { userReducer } from "./userReducer";

interface Props {
    children: JSX.Element | JSX.Element[];
}

// Get user from localStorage
const userString = localStorage.getItem("user");
const user: User = userString ? JSON.parse(userString) : null;

const INITIAL_STATE: UserState = {
    user: user,
    isLoading: false,
    error: null,
};

interface AuthConfig {
    headers: {
        Authorization: string;
    };
}

interface RequestBody {
    email: string;
    password: string;
}

interface RequestBodyFirebase {
    email: string;
    displayName: string;
    phoneNumber: string;
    uid: string;
}

export const UserProvider = ({ children }: Props) => {
    const [userState, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const login = async (email: string, password: string) => {
        try {
            dispatch({ type: "LOGIN_REQUEST" });

            const requestBody: RequestBody = { email, password };

            const { data } = await authApi.post<User>(
                "/users/login",
                requestBody
            );

            localStorage.setItem("user", JSON.stringify(data));

            dispatch({ type: "LOGIN_SUCCESS", payload: { user: data } });
        } catch (error: any) {
            dispatch({
                type: "LOGIN_FAILURE",
                payload: { error: error.response.data.msg },
            });
        }
    };

    const loginWithGoogle = async () => {
        try {
            dispatch({ type: "LOGIN_REQUEST" });

            const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();
            const { user }: UserCredential = await signInWithPopup(
                auth,
                googleProvider
            );

            const requestBody: RequestBodyFirebase = {
                displayName: user.displayName || "",
                email: user.email || "",
                phoneNumber: user.phoneNumber || "",
                uid: user.uid,
            };

            const { data } = await authApi.post<User>(
                "/users/loginFirebase",
                requestBody
            );

            localStorage.setItem("user", JSON.stringify(data));

            dispatch({ type: "LOGIN_SUCCESS", payload: { user: data } });
        } catch (error: any) {
            dispatch({
                type: "LOGIN_FAILURE",
                payload: { error: error.response.data.msg },
            });
        }
    };

    const loginWithFacebook = async () => {
        try {
            dispatch({ type: "LOGIN_REQUEST" });

            const facebookProvider: FacebookAuthProvider =
                new FacebookAuthProvider();

            const { user }: UserCredential = await signInWithPopup(
                auth,
                facebookProvider
            );

            const requestBody: RequestBodyFirebase = {
                displayName: user.displayName || "",
                email: user.email || "",
                phoneNumber: user.phoneNumber || "",
                uid: user.uid,
            };

            const { data } = await authApi.post<User>(
                "/users/loginFirebase",
                requestBody
            );

            localStorage.setItem("user", JSON.stringify(data));

            dispatch({ type: "LOGIN_SUCCESS", payload: { user: data } });
        } catch (error: any) {
            dispatch({
                type: "LOGIN_FAILURE",
                payload: { error: error.response.data.msg },
            });
        }
    };

    const loginWithGithub = async () => {
        try {
            dispatch({ type: "LOGIN_REQUEST" });

            const githubProvider: GithubAuthProvider = new GithubAuthProvider();

            const { user }: UserCredential = await signInWithPopup(
                auth,
                githubProvider
            );

            const requestBody: RequestBodyFirebase = {
                displayName: user.displayName || "",
                email: user.email || "",
                phoneNumber: user.phoneNumber || "",
                uid: user.uid,
            };

            const { data } = await authApi.post<User>(
                "/users/loginFirebase",
                requestBody
            );

            localStorage.setItem("user", JSON.stringify(data));

            dispatch({ type: "LOGIN_SUCCESS", payload: { user: data } });
        } catch (error: any) {
            dispatch({
                type: "LOGIN_FAILURE",
                payload: { error: error.response.data.msg },
            });
        }
    };

    const register = async (email: string, password: string) => {
        try {
            dispatch({ type: "SIGNUP_REQUEST" });

            const requestBody: RequestBody = { email, password };

            const { data } = await authApi.post<User>("/users", requestBody);

            localStorage.setItem("user", JSON.stringify(data));

            dispatch({ type: "SIGNUP_SUCCESS", payload: { user: data } });
        } catch (error: any) {
            dispatch({
                type: "SIGNUP_FAILURE",
                payload: { error: error.response.data.msg },
            });
        }
    };

    const updateProfile = async (formData: FormData) => {
        try {
            dispatch({ type: "UPDATE_REQUEST" });

            const token: string = userState.user?.token || "";

            const config: AuthConfig = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const { data } = await authApi.patch<User>(
                `/users/${userState.user?._id}`,
                formData,
                config
            );

            localStorage.setItem("user", JSON.stringify(data));

            dispatch({ type: "UPDATE_SUCCESS", payload: { user: data } });
        } catch (error: any) {
            dispatch({
                type: "UPDATE_FAILURE",
                payload: { error: error.response.data.msg },
            });
        }
    };

    const logout = () => {
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT" });
    };

    return (
        <UserContext.Provider
            value={{
                userState,
                login,
                loginWithGoogle,
                loginWithFacebook,
                loginWithGithub,
                register,
                updateProfile,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
