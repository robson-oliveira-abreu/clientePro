import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components/native';
import { ClientsList } from '../screens/ClientsList/ClientsList';
import { Home } from '../screens/Home/Home';
import { ClientProps } from './app.stack.routes';

export type RootTabParamList = {
    Home: undefined;
    Clients: undefined;
    Client: { client: ClientProps };
    Bills: undefined;
    Reports: undefined;
    AddClient: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const tabIcons = (name: string, color: string) => {
    if (name === 'Home') {
        return <Icon name="home" size={30} color={color} />;
    }
    if (name === 'Clients') {
        return <Icon name="users" size={30} color={color} />;
    }
    if (name === 'Bills') {
        return <Icon name="dollar-sign" size={30} color={color} />;
    }
    if (name === 'Reports') {
        return <Icon name="trending-up" size={30} color={color} />;
    }
};

export function AppTabRoutes() {
    const theme = useTheme();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => tabIcons(route.name, color),
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.colors.background_primary,
                    height: 60,
                },
                tabBarLabelStyle: {
                    display: 'none',
                },
                tabBarActiveTintColor: theme.colors.main,
                tabBarInactiveTintColor: theme.colors.shape,
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Clients" component={ClientsList} />
            <Tab.Screen name="Bills" component={Home} />
            <Tab.Screen name="Reports" component={Home} />
        </Tab.Navigator>
    );
}
