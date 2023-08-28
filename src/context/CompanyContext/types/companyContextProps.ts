import { Company } from "../../../models/Company";

export type CompanyContextProps = {
    company: Company | null | undefined;
    initializing: boolean;
    handleSaveCompany: (companyName: string, name: string) => void;
    handleGetCompany: () => void;
};