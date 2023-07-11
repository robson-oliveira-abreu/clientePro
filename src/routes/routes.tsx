import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStackRoutes } from './app.stack.routes';
import { AuthStackRoutes } from './auth.stack.routes';

import { AuthContext } from '../context/AuthContext/AuthContext';
import { NavigationBackgroundContainer } from '../components/NavigationBackground/styles';
import { LoadScreen } from '../components/LoadScreen/LoadScreen';

export function Routes() {
    const { isAuth, initializing } = useContext(AuthContext);

    if (initializing) {
        return <LoadScreen />;
    }

    return (
        <NavigationContainer>
            <NavigationBackgroundContainer>
                {!isAuth ? <AuthStackRoutes /> : <AppStackRoutes />}
            </NavigationBackgroundContainer>
        </NavigationContainer>
    );
}
