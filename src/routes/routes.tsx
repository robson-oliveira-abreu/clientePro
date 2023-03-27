import React, { useContext } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppStackRoutes } from './app.stack.routes';
import { AuthStackRoutes } from './auth.stack.routes';
import { useTheme } from 'styled-components/native';

import { AuthContext } from '../context/AuthContext/AuthContext';

export function Routes() {
    const { user, initializing } = useContext(AuthContext);
    const theme = useTheme();

    if (initializing) {
        return (
            <View
                style={[
                    styles.initializing,
                    { backgroundColor: theme.colors.background_primary },
                ]}
            >
                <ActivityIndicator size={'large'} color={theme.colors.main} />
            </View>
        );
    }

    return (
        <NavigationContainer>
            {!user ? <AuthStackRoutes /> : <AppStackRoutes />}
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    initializing: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
