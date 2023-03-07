import { createContext } from "react";
import { User } from "../../interfaces/User";

export interface UserState {
    user: User | null;
    isLoading: boolean;
    error: string | null;
}

interface UserContextProps {
    userState: UserState;
    login: (email: string, password: string) => void;
    register: (email: string, password: string) => void;
    updateProfile: (formData: FormData) => Promise<void>;
    logout: () => void;
}

export const UserContext = createContext<UserContextProps>(
    {} as UserContextProps
);
