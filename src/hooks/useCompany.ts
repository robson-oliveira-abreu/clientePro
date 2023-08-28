import { useEffect, useState, useContext, useCallback } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { getCompany } from '../services/company/getCompany';
import { createCompany } from '../services/company/createCompany';
import { Company } from '../models/Company';

export function useCompany() {
    const [company, setCompany] = useState<Company | null | undefined>(null);
    const auth = useContext(AuthContext);

    const [initializing, setInitializing] = useState(true);

    function handleSaveCompany(companyName: string, name: string) {
        if (!auth.user?.uid) {
            return;
        }

        const companyData: Company = {
            name: companyName,
            owner: name,
            id: auth.user!.uid,
        }

        setCompany(companyData);
        createCompany(auth.user.uid, companyData);
    }

    const handleGetCompany = useCallback(async () => {
        const data = await getCompany(auth?.user?.uid!)

        setCompany(data);

        if (initializing) {
            setInitializing(oldState => !oldState);
        }

    }, [auth?.user?.uid, initializing])

    useEffect(() => {
        if (company) {
            setInitializing(false);
            return;
        }
        handleGetCompany();
    }, [auth?.user?.uid, initializing, company]);

    return {
        company,
        initializing,
        handleSaveCompany,
        handleGetCompany,
        setCompany,
    };
}
