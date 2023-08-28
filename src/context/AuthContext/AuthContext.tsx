import React, { createContext } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { AuthContextProps } from './types/authContextProps';
import { AuthProviderProps } from './types/authProviderProps';

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
