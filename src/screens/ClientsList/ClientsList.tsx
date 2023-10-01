import React from 'react';

import { AddButton } from '../../components/AddButton/AddButton';

import { ClientListProps } from './types/clientListProps';
import { useClientsListScreen } from './useClientsListScreen';

import * as S from './styles';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { Client } from '../../models/Client';
import { ClientCard } from './components/ClientCard/ClientCard';
import { ClientListHeader } from './components/ClientListHeader/ClientListHeader';

export function ClientsList({ navigation }: ClientListProps) {
    const { filterValue, clients, setFilterValue } = useClientsListScreen();

    const renderItem = ({ item, index }: ListRenderItemInfo<Client>) => (
        <ClientCard item={item} index={index} navigation={navigation} />
    );

    return (
        <S.Container>
            <FlatList
                ListHeaderComponent={
                    <ClientListHeader
                        filterValue={filterValue}
                        setFilterValue={setFilterValue}
                    />
                }
                data={clients}
                renderItem={renderItem}
                keyExtractor={(item: any) => item.document}
                contentContainerStyle={{ padding: 16 }}
            />
            <AddButton onPress={() => navigation?.navigate('AddClient')} />
        </S.Container>
    );
}
