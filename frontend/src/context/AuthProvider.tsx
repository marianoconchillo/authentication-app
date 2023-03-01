import { useReducer } from "react";
import authApi from "../api/authApi";
import { User } from "../interfaces/User";
import { AuthContext, AuthState } from "./AuthContext";
import { authReducer } from "./authReducer";

interface Props {
    children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: AuthState = {
    user: null,
    isLoading: false,
    error: null,
};

interface RequestBody {
    email: string;
    password: string;
}

export const AuthProvider = ({ children }: Props) => {
    const [authState, dispatch] = useReducer(authReducer, INITIAL_STATE);

    const login = async (email: string, password: string) => {
        try {
            dispatch({ type: "LOGIN_REQUEST" });

            const requestBody: RequestBody = { email, password };

            const { data } = await authApi.post<User>(
                "/users/login",
                requestBody
            );

            dispatch({ type: "LOGIN_SUCCESS", payload: { user: data } });
        } catch (error: any) {
            dispatch({
                type: "LOGIN_FAILURE",
                payload: { error: error.response.data.msg },
            });
        }
    };

    const register = (email: string, password: string) => {};

    const logout = () => {};

    return (
        <AuthContext.Provider
            value={{
                authState,
                login,
                register,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
