import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { InputSearch } from '../../components/InputSearch/InputSearch';
import { Container, Title } from './styles';
import { BillsCard } from '../../components/BillsCard/BillsCard';
import { AddButton } from '../../components/AddButton/AddButton';
import { useBillsScreen } from './useBillsScreen';
import Animated, { SlideInRight } from 'react-native-reanimated';
import { Bill } from '../../models/Bill';

export function Bills() {
    const { search, filteredBills, handleAddBill, setSearch } =
        useBillsScreen();

    const renderItem = ({ item, index }: ListRenderItemInfo<Array<Bill>>) => (
        <Animated.View
            entering={SlideInRight.delay(50 * (index > 10 ? 10 : index))}
        >
            <BillsCard bills={item} />
        </Animated.View>
    );

    return (
        <Container>
            <InputSearch value={search} onChangeText={setSearch} />

            <Title>Contas</Title>

            <FlatList
                data={filteredBills}
                keyExtractor={([item]) => item.clientId!}
                contentContainerStyle={{ gap: 10 }}
                renderItem={renderItem}
            />
            <AddButton onPress={handleAddBill} />
        </Container>
    );
}
