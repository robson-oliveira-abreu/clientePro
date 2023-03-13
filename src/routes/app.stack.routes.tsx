import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddClient} from '../screens/AddClient/AddClient';
import {AppTabRoutes} from './app.tab.routes';
import {Client} from '../screens/Client/Client';

export type RootStackParamList = {
    HomeTab: undefined;
    AddClient: undefined;
    Client: {id: number; name: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppStackRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Group>
                <Stack.Screen name="HomeTab" component={AppTabRoutes} />
                <Stack.Screen name="AddClient" component={AddClient} />
                <Stack.Screen name="Client" component={Client} />
            </Stack.Group>
        </Stack.Navigator>
    );
}
