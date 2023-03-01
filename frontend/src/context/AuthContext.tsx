import { createContext } from "react";
import { User } from "../interfaces/User";

export interface AuthState {
    user: User | null;
    isLoading: boolean;
    error: string | null;
}

interface AuthContextProps {
    authState: AuthState;
    login: (email: string, password: string) => void;
    register: (email: string, password: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>(
    {} as AuthContextProps
);
