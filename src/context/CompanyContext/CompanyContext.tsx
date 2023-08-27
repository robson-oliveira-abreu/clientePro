import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import React, { createContext } from 'react';
import { ICompany, useCompany } from '../../hooks/useCompany';

interface CompanyProviderProps {
    children: React.ReactElement;
}

type CompanyContextProps = {
    company: ICompany | null | undefined;
    initializing: boolean;
    handleSaveCompany: (companyName: string, name: string) => void;
    handleGetCompany: () => void;
};

const CompanyContext = createContext<CompanyContextProps>({
    company: null,
    initializing: false,
    handleSaveCompany: () => {},
    handleGetCompany: () => {},
});

const CompanyProvider = ({ children }: CompanyProviderProps) => {
    const { company, initializing, handleSaveCompany, handleGetCompany } =
        useCompany();
    return (
        <CompanyContext.Provider
            value={{ company, initializing, handleSaveCompany, handleGetCompany }}
        >
            {children}
        </CompanyContext.Provider>
    );
};

export { CompanyProvider, CompanyContext };
