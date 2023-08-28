import React, { createContext } from 'react';
import { useCompany } from '../../hooks/useCompany';
import { CompanyContextProps } from './types/companyContextProps';
import { CompanyProviderProps } from './types/companyProviderProps'

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
