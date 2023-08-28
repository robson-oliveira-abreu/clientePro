import { useEffect, useState } from 'react';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export function useAuth() {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    const isAuth = !!user?.uid;

    const [initializing, setInitializing] = useState(true);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(_user => {
            setUser(_user);
            if (initializing) {
                setInitializing(oldState => !oldState);
            }
        });

        return () => unsubscribe();
    }, [initializing]);

    return { user, isAuth, initializing };
}
