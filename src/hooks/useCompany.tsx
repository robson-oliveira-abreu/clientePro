import { useEffect, useState, useContext } from 'react';

import firestore, {
    FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import { AuthContext } from '../context/AuthContext/AuthContext';

export function useCompany() {
    const [company, setCompany] = useState<
        FirebaseFirestoreTypes.DocumentData | null | undefined
    >(null);
    const auth = useContext(AuthContext);

    const [initializing, setInitializing] = useState(true);

    const handleSaveCompany = (companyName: string, name: string) => {
        if (!auth.user?.uid) {
            return;
        }
        firestore()
            .collection('company')
            .doc(auth.user.uid)
            .set({
                name: companyName,
                owner: name,
            })
            .then(() => {
                firestore()
                    .collection('company')
                    .doc(auth.user?.uid)
                    .get()
                    .then(res => {
                        setCompany(() => {
                            const newState = res.data();
                            if (newState) {
                                return newState;
                            }
                        });
                    });
            });
    };

    useEffect(() => {
        if (company) {
            setInitializing(false);
            return;
        }
        firestore()
            .collection('company')
            .doc(auth?.user?.uid)
            .get()
            .then(_company => {
                setCompany(_company.data());
                if (initializing) {
                    setInitializing(oldState => !oldState);
                }
            });
    }, [auth?.user?.uid, initializing, company]);

    return {
        company,
        initializing,
        handleSaveCompany,
    };
}
