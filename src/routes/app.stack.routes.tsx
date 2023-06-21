import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddClient } from '../screens/AddClient/AddClient';
import { AppTabRoutes } from './app.tab.routes';
import { Client } from '../screens/Client/Client';
import { AddBills } from '../screens/AddBills/AddBills';
import { Client as ClientType } from '../types/Client';

export type RootStackParamList = {
    HomeTab: undefined;
    AddClient: undefined;
    AddBills: { client: ClientType };
    Client: { client: ClientType };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppStackRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Group>
                <Stack.Screen name="HomeTab" component={AppTabRoutes} />
                <Stack.Screen name="AddClient" component={AddClient} />
                <Stack.Screen name="AddBills" component={AddBills} />
                <Stack.Screen name="Client" component={Client} />
            </Stack.Group>
        </Stack.Navigator>
    );
}
