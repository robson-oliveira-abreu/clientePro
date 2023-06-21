import { useContext, useState } from "react";
import { CompanyContext } from "../../context/CompanyContext/CompanyContext";

export function useCompanyDataScreen() {
    const [companyName, setCompanyName] = useState('');
    const [name, setName] = useState('');

    const company = useContext(CompanyContext);

    const handleSaveCompany = () => {
        if (!companyName && !name) {
            return;
        }
        company.handleSaveCompany(companyName, name);
    };

    return {
        companyName,
        name,
        setName,
        handleSaveCompany,
        setCompanyName,
    };
}