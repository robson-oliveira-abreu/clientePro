import { useContext, useEffect, useState } from "react";
import { Bill } from "../../models/Bill";
import { listenUnPaidBillsByCompany } from "../../services/bill/listenUnPaidBillsByCompany";
import { CompanyContext } from "../../context/CompanyContext/CompanyContext";


export function useBillsScreen() {
    const [bills, setBills] = useState<Bill[][]>([]);
    const [search, setSearch] = useState('');
    const filteredBills = filterBills();
    const { company } = useContext(CompanyContext);

    function filterBills() {
        return bills.filter(currentBills =>
            currentBills[0]
                .clientName!.toLowerCase()
                .includes(search.toLowerCase()),
        );
    }

    function organizeBills(
        toOrganizeBills: Bill[],
    ) {
        let groupByClientId: { [clientId: string]: Bill[] } = {};

        toOrganizeBills.forEach(bill => {
            groupByClientId[bill?.clientId] = groupByClientId[bill?.clientId]
                ? [...groupByClientId[bill.clientId], bill]
                : [bill];
        });

        return Object.values(groupByClientId);
    }

    function handleAddBill() {
        console.log('handleAddBill')
    }

    useEffect(() => {
        const subscriber = listenUnPaidBillsByCompany(company?.id!, data => {
            const organizedBills = organizeBills(data);
            setBills(organizedBills);
        });

        return () => subscriber();
    }, []);

    return {
        search,
        filteredBills,
        setSearch,
        handleAddBill,
    }
}