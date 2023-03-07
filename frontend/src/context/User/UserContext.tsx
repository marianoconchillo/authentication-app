import { createContext } from "react";
import { User } from "../../interfaces/User";

export interface UserState {
    user: User | null;
    isLoading: boolean;
    error: string | null;
}

export type FirebaseProvider = "FACEBOOK" | "GOOGLE" | "GITHUB" | "TWITTER";

interface UserContextProps {
    userState: UserState;
    login: (email: string, password: string) => void;
    loginWithGoogle: () => Promise<void>;
    loginWithFacebook: () => Promise<void>;
    register: (email: string, password: string) => void;
    updateProfile: (formData: FormData) => Promise<void>;
    logout: () => void;
}

export const UserContext = createContext<UserContextProps>(
    {} as UserContextProps
);
