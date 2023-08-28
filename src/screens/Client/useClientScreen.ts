import { useState, useEffect } from 'react'
import { isEqual } from 'lodash';
import { Bill } from '../../models/Bill';
import { listenBills } from '../../services/bill/listenBillsByClient';
import { UseClientScreenProps } from './types/useClientScreenProps';

export function useClientScreen({ client, navigation }: UseClientScreenProps) {
    const [bills, setBills] = useState<Bill[]>([]);

    const navigateAddBill = () => {
        navigation.navigate('AddBills', { client })
    }

    useEffect(() => {
        if (!client.document) {
            return;
        }
        const subscriber = listenBills(client.id, (newBills) => {
            if (!isEqual(newBills, bills)) {
                setBills(newBills);
            }
        });

        return () => subscriber();
    }, [client.document, bills]);

    return {
        bills,
        navigateAddBill
    }
}