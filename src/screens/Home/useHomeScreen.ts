import { useEffect, useContext, useState, useMemo, useRef, useCallback } from 'react';
import { CompanyContext } from '../../context/CompanyContext/CompanyContext';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import BottomSheet from '@gorhom/bottom-sheet';
import { useIsFocused } from '@react-navigation/native';
import { Bill } from '../../models/Bill';
import { listenBills } from '../../services/bill/listenBillsByClient';
import { listenBillsByCompany } from '../../services/bill/listenBillsByCompany';

export function useHomeScreen() {
    const { isAuth } = useContext(AuthContext);
    const { company, initializing } = useContext(CompanyContext);
    const [bills, setBills] = useState<Array<Bill>>([]);
    const [loading, setLoading] = useState(true);
    const focus = useIsFocused();

    const unPaidBills = useMemo(() => bills.filter(b => !b.paid), [bills]);

    const bottomSheetRef = useRef<BottomSheet>(null);

    const snapPoints = useMemo(() => [1, '30%'], []);

    const totals = getHomeTotals();

    function getHomeTotals() {
        const income = bills.reduce((total, bill) => total + bill?.amount!, 0);
        let received = 0;
        let missing = 0;

        bills.forEach(bill => {
            if (bill?.paid) {
                return received += bill?.amount!;
            }
            missing += bill?.amount!;
        });

        return { income, received, missing, };
    }

    function handleOpenOptions() {
        bottomSheetRef.current?.expand();
    }

    function handleCloseOptions() {
        bottomSheetRef.current?.close();
    }

    const handleSheetChanges = useCallback((index: number) => {
        if (index === 0) {
            handleCloseOptions();
        }
    }, []);

    useEffect(() => {
        if (!focus) {
            return handleCloseOptions();
        }
    }, [focus]);

    useEffect(() => {
        const companyId = company?.id;
        if (!companyId) {
            return;
        }

        const subscriber = listenBillsByCompany(companyId, docs => {
            setLoading(false);
            setBills(docs)
        }
        );

        return () => subscriber();
    }, [company?.id]);

    return {
        isAuth,
        unPaidBills,
        company,
        totals,
        initializingCompany: initializing,
        bottomSheetRef,
        snapPoints,
        loading: loading && !!company?.id,
        handleOpenOptions,
        handleSheetChanges,
        handleCloseOptions,
    };
}
