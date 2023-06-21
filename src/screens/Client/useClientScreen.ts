import { useState, useEffect } from 'react'
import { isEqual } from 'lodash';
import { Bill } from '../../types/Bill';
import { listenBills } from './services';
import { Client } from '../../types/Client';

export function useClientScreen({ client }: {client: Client}) {
    const [bills, setBills] = useState<Bill[]>([]);

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
        bills
    }
}