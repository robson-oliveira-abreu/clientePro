import React from 'react';

import { AddButton } from '../../components/AddButton/AddButton';
import { InputSearch } from '../../components/InputSearch/InputSearch';

import { ClientListProps } from './types/clientListProps';
import { useClientsListScreen } from './useClientsListScreen';

import * as S from './styles';
import Animated, { SlideInRight } from 'react-native-reanimated';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { Client } from '../../models/Client';

export function ClientsList({ navigation }: ClientListProps) {
    const { filterValue, clients, setFilterValue } =
        useClientsListScreen();

    const renderItem = ({ item, index }: ListRenderItemInfo<Client>) => (
        <Animated.View
            entering={SlideInRight.delay(50 * (index > 10 ? 10 : index))}
        >
            <S.CardCLient
                key={item.id}
                onPress={() => navigation?.navigate('Client', { client: item })}
            >
                <S.CardCLientTitle>{item.name}</S.CardCLientTitle>
            </S.CardCLient>
        </Animated.View>
    );

    return (
        <S.Container>
            <S.Header>
                <InputSearch
                    onChangeText={setFilterValue}
                    value={filterValue}
                />
            </S.Header>
            <S.Title>Clientes</S.Title>
            <FlatList
                data={clients}
                renderItem={renderItem}
                keyExtractor={(item: any) => item.document}
            />
            <AddButton onPress={() => navigation?.navigate('AddClient')} />
        </S.Container>
    );
}
