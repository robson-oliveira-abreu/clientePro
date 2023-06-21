import { useEffect, useState } from "react";
import { Bill } from '../../types/Bill';
import { listenUnPaidBills } from "./services";


export function useBillsScreen() {
    const [bills, setBills] = useState<Bill[][]>([]);
    const [search, setSearch] = useState('');
    const filteredBills = filterBills();

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
            const newBill = {
                amount: bill?.amount,
                category: bill?.category,
                clientId: bill?.clientId,
                clientName: bill?.clientName,
                companyId: bill?.companyId,
                description: bill?.description,
                expiration: bill?.expiration,
                id: bill?.id,
                paid: bill?.paid,
            };

            groupByClientId[bill?.clientId] = groupByClientId[bill?.clientId]
                ? [...groupByClientId[bill.clientId], newBill]
                : [newBill];
        });

        return Object.values(groupByClientId);
    }

    function handleAddBill() {
        console.log('handleAddBill')
    }

    useEffect(() => {
        const subscriber = listenUnPaidBills(data => {
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