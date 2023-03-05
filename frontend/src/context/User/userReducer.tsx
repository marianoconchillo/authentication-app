import { User } from "../../interfaces/User";
import { UserState } from "./UserContext";

type UserAction =
    | { type: "LOGIN_REQUEST" }
    | { type: "LOGIN_SUCCESS"; payload: { user: User } }
    | { type: "LOGIN_FAILURE"; payload: { error: string } }
    | { type: "SIGNUP_REQUEST" }
    | { type: "SIGNUP_SUCCESS"; payload: { user: User } }
    | { type: "SIGNUP_FAILURE"; payload: { error: string } }
    | { type: "UPDATE_REQUEST" }
    | { type: "UPDATE_SUCCESS"; payload: { user: User } }
    | { type: "UPDATE_FAILURE"; payload: { error: string } }
    | { type: "LOGOUT" };

export const userReducer = (
    state: UserState,
    action: UserAction
): UserState => {
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

        case "SIGNUP_SUCCESS":
            return {
                ...state,
                isLoading: false,
                user: action.payload.user,
                error: null,
            };

        case "SIGNUP_REQUEST":
            return {
                ...state,
                isLoading: true,
            };

        case "SIGNUP_FAILURE":
            return {
                ...state,
                isLoading: false,
                user: null,
                error: action.payload.error,
            };

        case "UPDATE_REQUEST":
            return {
                ...state,
                isLoading: true,
            };

        case "UPDATE_SUCCESS":
            return {
                ...state,
                isLoading: false,
                user: action.payload.user,
                error: null,
            };

        case "UPDATE_FAILURE":
            return {
                ...state,
                isLoading: false,
                user: null,
                error: action.payload.error,
            };

        case "LOGOUT": {
            return {
                ...state,
                user: null,
            };
        }

        default:
            return state;
    }
};
