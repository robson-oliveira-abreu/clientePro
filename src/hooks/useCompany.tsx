import { useEffect, useState, useContext } from 'react';

import firestore, {
    FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import { AuthContext } from '../context/AuthContext/AuthContext';

export interface ICompany extends FirebaseFirestoreTypes.DocumentData {
    name?: string;
    owner?: string;
    id?: string;
}

export function useCompany() {
    const [company, setCompany] = useState<ICompany | null | undefined>(null);
    const auth = useContext(AuthContext);

    const [initializing, setInitializing] = useState(true);

    function handleSaveCompany(companyName: string, name: string) {
        if (!auth.user?.uid) {
            return;
        }

        setCompany({
            name: companyName,
            owner: name,
            id: auth.user!.uid,
        });

        firestore().collection('companies').doc(auth.user.uid).set({
            name: companyName,
            owner: name,
            id: auth.user.uid,
        });
    }

    useEffect(() => {
        if (company) {
            setInitializing(false);
            return;
        }
        firestore()
            .collection('companies')
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
