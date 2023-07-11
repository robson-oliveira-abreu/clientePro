import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import React, { createContext } from 'react';
import { useAuth } from '../../hooks/useAuth';

interface AuthProviderProps {
    children: React.ReactElement;
}

type AuthContextProps = {
    user: FirebaseAuthTypes.User | null;
    isAuth: boolean;
    initializing: boolean;
};

const AuthContext = createContext<AuthContextProps>({
    user: null,
    isAuth: false,
    initializing: false,
});

const AuthProvider = ({ children }: AuthProviderProps) => {
    const { user, isAuth, initializing } = useAuth();
    return (
        <AuthContext.Provider value={{ user, isAuth, initializing }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
