import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppStackRoutes} from './app.stack.routes';
import {AuthStackRoutes} from './auth.stack.routes';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useTheme} from 'styled-components/native';
import {CompanyData} from '../screens/CompanyData/CompanyData';
import firestore, {
    FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

export function Routes() {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    const [company, setCompany] =
        useState<FirebaseFirestoreTypes.DocumentData | null>(null);
    const [initializing, setInitializing] = useState(true);

    const theme = useTheme();

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(_user => {
            setUser(_user);
            if (initializing) {
                setInitializing(oldState => !oldState);
            }
        });

        return () => unsubscribe();
    }, [initializing]);

    useEffect(() => {
        const fecthCompany = async () => {
            if (company?.name) {
                return;
            }

            firestore()
                .collection('company')
                .doc(user?.uid)
                .get()
                .then(res => {
                    const newState = res.data();
                    if (newState) {
                        setCompany(newState);
                    }
                });
        };
        fecthCompany();
    }, [company?.name, user?.uid]);

    if (initializing) {
        return (
            <View
                style={[
                    styles.initializing,
                    {backgroundColor: theme.colors.background_primary},
                ]}>
                <ActivityIndicator size={'large'} color={theme.colors.main} />
            </View>
        );
    }

    return (
        <NavigationContainer>
            {!user && <AuthStackRoutes />}
            {user && !company && (
                <CompanyData user={user} setCompany={setCompany} />
            )}
            {user && company && <AppStackRoutes />}
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
