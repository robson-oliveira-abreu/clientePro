import { useEffect, useState } from 'react';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export function useAuth() {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

    const [initializing, setInitializing] = useState(true);

    const signup = (email: string, password: string): boolean => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                if (userCredentials?.user?.uid) {
                    return true;
                }
            })
            .catch(error => {
                console.log({ error });
                if (error.code === 'auth/email-already-in-use') {
                    console.log('email já existe');
                }
                if (error.code === 'auth/invalid-email') {
                    console.log('email invalido');
                }
            });
        return false;
    };

    const signin = (email: string, password: string): void => {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                console.log({ userCredential });
            })
            .catch(error => console.log(error));
    };

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
