import { User } from "../interfaces/User";
import { AuthState } from "./AuthContext";

type AuthAction =
    | { type: "LOGIN_REQUEST" }
    | { type: "LOGIN_SUCCESS"; payload: { user: User } }
    | { type: "LOGIN_FAILURE"; payload: { error: string } };

export const authReducer = (
    state: AuthState,
    action: AuthAction
): AuthState => {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return {
                ...state,
                isLoading: true,
            };

        case "LOGIN_SUCCESS":
            return {
                ...state,
                isLoading: false,
                user: action.payload.user,
                error: null,
            };

        case "LOGIN_FAILURE":
            return {
                ...state,
                isLoading: false,
                user: null,
                error: action.payload.error,
            };

        default:
            return state;
    }
};
