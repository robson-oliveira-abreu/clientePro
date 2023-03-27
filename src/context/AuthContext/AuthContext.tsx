import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import React, { createContext } from 'react';
import { useAuth } from '../../hooks/useAuth';

interface AuthProviderProps {
    children: React.ReactElement;
}

type AuthContextProps = {
    user: FirebaseAuthTypes.User | null;
    initializing: boolean;
};

const AuthContext = createContext<AuthContextProps>({
    user: null,
    initializing: false,
});

const AuthProvider = ({ children }: AuthProviderProps) => {
    const { user, initializing } = useAuth();
    return (
        <AuthContext.Provider value={{ user, initializing }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
