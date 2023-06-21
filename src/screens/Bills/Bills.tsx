import React from 'react';
import { FlatList } from 'react-native';
import { InputSearch } from '../../components/InputSearch/InputSearch';
import { Container, Title } from './styles';
import { BillsCard } from '../../components/BillsCard/BillsCard';
import { AddButton } from '../../components/AddButton/AddButton';
import { useBillsScreen } from './useBillsScreen';

export function Bills() {
    const { search, filteredBills, handleAddBill, setSearch } = useBillsScreen();

    return (
        <Container>
            <InputSearch value={search} onChangeText={setSearch} />

            <Title>Contas</Title>

            <FlatList
                data={filteredBills}
                keyExtractor={([item]) => item.clientId!}
                contentContainerStyle={{ gap: 10 }}
                renderItem={({ item }) => <BillsCard bills={item} />}
            />
            <AddButton onPress={handleAddBill} />
        </Container>
    );
}
