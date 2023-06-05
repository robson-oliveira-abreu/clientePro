import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export function useAuth() {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

    const [initializing, setInitializing] = useState(true);

    function signup(email: string, password: string): void {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(error => {
                console.log({ error });
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('Cadastro', 'Email já está em uso.');
                }
                if (error.code === 'auth/invalid-email') {
                    Alert.alert('Cadastro', 'Email invalido.');
                }
            });
    }

    function signin(email: string, password: string): void {
        auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => {
                console.log(error);
                if (error.code === 'auth/user-not-found') {
                    Alert.alert('Login', 'Usuario não encontrado.');
                }
                if (error.code === 'auth/wrong-password') {
                    Alert.alert('Login', 'Email ou senha invalidos.');
                }
            });
    }

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(_user => {
            setUser(_user);
            if (initializing) {
                setInitializing(oldState => !oldState);
            }
        });

        return () => unsubscribe();
    }, [initializing]);

    return { user, initializing, signup, signin };
}
