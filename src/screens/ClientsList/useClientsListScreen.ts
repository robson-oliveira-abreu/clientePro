import { useContext, useEffect, useState, useMemo } from 'react';
import { CompanyContext } from '../../context/CompanyContext/CompanyContext';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { listenClients } from './services';
import { isEqual } from 'lodash';
import { Client } from '../../types/Client';

export function useClientsListScreen() {
    const [clients, setClients] = useState<Client[]>([]);
    const [filterValue, setFilterValue] = useState('');
    const { company } = useContext(CompanyContext);

    const { user } = useContext(AuthContext);

    const filteredClients: Client[] = useMemo(() => clients?.filter(client =>
        client?.name?.toLowerCase().includes(filterValue.toLowerCase()),
    ),[clients, filterValue])

    useEffect(() => {
        if (!company?.id) {
            return;
        }

        const subscriber = listenClients(company.id!, newClients => {
            if (!isEqual(newClients, clients)) {
                setClients(newClients);
            }
        });

        return () => subscriber();
    }, [clients, user]);

    return {
        clients: filteredClients,
        filterValue,
        setFilterValue,
    };
}
