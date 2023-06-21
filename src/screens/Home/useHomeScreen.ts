import { useEffect, useContext, useState, useMemo } from 'react';
import { CompanyContext } from '../../context/CompanyContext/CompanyContext';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { listenBills } from './services';
import { Bill } from '../../types/Bill';

export function useHomeScreen() {
    const auth = useContext(AuthContext);
    const { company, initializing: initializingCompany } =
        useContext(CompanyContext);

    const [bills, setBills] = useState<Array<Bill>>([]);
    const [optionsModal, setOptionsModal] = useState(false);
    const unPaidBills = useMemo(
        () => bills.filter(bill => !bill.paid),
        [bills],
    );
    const totals = getHomeTotals();

    function getHomeTotals() {
        const totalIncome = bills.reduce(
            (total, bill) => total + bill?.amount!,
            0,
        );

        let totalReceived = 0;
        let totalMissing = 0;

        bills.forEach(bill => {
            if (bill?.paid) {
                totalReceived += bill?.amount!;
            } else {
                totalMissing += bill?.amount!;
            }
        });

        return {
            totalIncome,
            totalReceived,
            totalMissing,
        };
    }

    useEffect(() => {
        const companyId = company?.id;
        if (!companyId) {
            return;
        }

        const subscriber = listenBills(companyId, docs => setBills(docs));

        return () => subscriber();
    }, [company?.id]);

    return {
        auth,
        unPaidBills,
        company,
        setOptionsModal,
        totals,
        optionsModal,
        initializingCompany,
    };
}
