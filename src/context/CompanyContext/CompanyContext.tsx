import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import React, { createContext } from 'react';
import { useCompany } from '../../hooks/useCompany';

interface CompanyProviderProps {
    children: React.ReactElement;
}

type CompanyContextProps = {
    company: FirebaseFirestoreTypes.DocumentData | null | undefined;
    initializing: boolean;
    handleSaveCompany: (companyName: string, name: string) => void;
};

const CompanyContext = createContext<CompanyContextProps>({
    company: null,
    initializing: false,
    handleSaveCompany: () => {},
});

const CompanyProvider = ({ children }: CompanyProviderProps) => {
    const { company, initializing, handleSaveCompany } = useCompany();
    return (
        <CompanyContext.Provider
            value={{ company, initializing, handleSaveCompany }}
        >
            {children}
        </CompanyContext.Provider>
    );
};

export { CompanyProvider, CompanyContext };
