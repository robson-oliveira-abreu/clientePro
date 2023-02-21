/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home/Home';
import {Signin} from '../screens/Signin/Signin';
import Icon from 'react-native-vector-icons/Feather';
import {useTheme} from 'styled-components/native';

const Tab = createBottomTabNavigator();

export function AppRoutes() {
    const theme = useTheme();
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color}) => {
                    if (route.name === 'Home') {
                        return <Icon name="home" size={30} color={color} />;
                    }
                    if (route.name === 'Signin') {
                        return <Icon name="unlock" size={30} color={color} />;
                    }
                },
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
            })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Signin" component={Signin} />
        </Tab.Navigator>
    );
}
