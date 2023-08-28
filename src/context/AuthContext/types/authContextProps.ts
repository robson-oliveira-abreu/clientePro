import { FirebaseAuthTypes } from "@react-native-firebase/auth";

export type AuthContextProps = {
    user: FirebaseAuthTypes.User | null;
    isAuth: boolean;
    initializing: boolean;
};