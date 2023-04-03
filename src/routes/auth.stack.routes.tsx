import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Signin } from '../screens/Signin/Signin';
import { Signup } from '../screens/Signup/Signup';

export type RootStackAuthParamList = {
    Signin: undefined;
    Signup: undefined;
};

const Stack = createNativeStackNavigator<RootStackAuthParamList>();

export function AuthStackRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Signin"
        >
            <Stack.Group>
                <Stack.Screen name="Signin" component={Signin} />
                <Stack.Screen name="Signup" component={Signup} />
            </Stack.Group>
        </Stack.Navigator>
    );
}
