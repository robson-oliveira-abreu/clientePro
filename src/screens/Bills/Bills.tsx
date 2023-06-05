import React, { useState, useEffect, useCallback } from 'react';
import { FlatList } from 'react-native';
import { InputSearch } from '../../components/InputSearch/InputSearch';
import { Container, Title } from './styles';
import { listenUnPaidBills } from '../../firebase-helpers/bills/listenUnPaidBills';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { BillsCard } from '../../components/BillsCard/BillsCard';
import { BillType } from '../../types/BillType';
import { AddButton } from '../../components/AddButton/AddButton';

export function Bills() {
    const [bills, setBills] = useState<BillType[][]>([]);
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
        toOrganizeBills: FirebaseFirestoreTypes.DocumentData[],
    ) {
        let groupByClientId: { [clientId: string]: BillType[] } = {};

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
        const subscriber = listenUnPaidBills(returnedData => {
            const organizedBills = organizeBills(returnedData);
            setBills(organizedBills);
        });

        return () => subscriber();
    }, []);

    return (
        <Container>
            <InputSearch value={search} onChangeText={setSearch} />

            <Title>Contas</Title>

            <FlatList
                data={filteredBills}
                keyExtractor={item => item[0].clientId!}
                contentContainerStyle={{ gap: 10 }}
                renderItem={({ item }) => <BillsCard bills={item} />}
            />
            <AddButton onPress={handleAddBill} />
        </Container>
    );
}
