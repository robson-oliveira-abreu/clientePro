import React from 'react';

import { AddButton } from '../../components/AddButton/AddButton';
import { InputSearch } from '../../components/InputSearch/InputSearch';

import { ClientListNavigationProps } from './types';
import { useClientsListScreen } from './useClientsListScreen';

import * as S from './styles';

export function ClientsList({ navigation }: ClientListNavigationProps) {
    const { clients, filterValue, filteredClints, setFilterValue } =
        useClientsListScreen();

    return (
        <S.Container>
            <S.Header>
                <InputSearch
                    onChangeText={setFilterValue}
                    value={filterValue}
                />
            </S.Header>
            <S.Title>Clientes</S.Title>
            <S.ContentList
                data={filterValue ? filteredClints : clients}
                renderItem={({ item }: { item: any }) => (
                    <S.CardCLient
                        key={item.id}
                        onPress={() =>
                            navigation?.navigate('Client', { client: item })
                        }
                    >
                        <S.CardCLientTitle>{item.name}</S.CardCLientTitle>
                    </S.CardCLient>
                )}
                keyExtractor={(item: any) => item.document}
            />
            <AddButton onPress={() => navigation?.navigate('AddClient')} />
        </S.Container>
    );
}
