import React from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { BackButton } from '../../components/BackButton/BackButton';
import { AddButton } from '../../components/AddButton/AddButton';
import { Bill } from '../../components/Bill/Bill';

import { useClientScreen } from './useClientScreen';
import { useTheme } from 'styled-components/native';

import { ClientProps } from './types/clientProps';

import * as S from './styles';
import { ClientTypes } from '../../models/Client';

export function Client({ route, navigation }: ClientProps) {
    const theme = useTheme();
    const { client } = route.params;
    const { bills, navigateAddBill } = useClientScreen({ client, navigation });

    return (
        <S.Container>
            <S.HeaderButtons>
                <BackButton size={30} />
                <S.EditButton>
                    <Icon
                        name="more-vertical"
                        size={30}
                        color={theme.colors.text}
                    />
                </S.EditButton>
            </S.HeaderButtons>

            <S.Header>
                <S.TitleName>{client.name}</S.TitleName>
                <S.ClientInfo>Responsavel: {client.responsible}</S.ClientInfo>
                <S.ClientInfo>Telefone: {client.phone}</S.ClientInfo>
                <S.ClientInfo>
                    {client.clientType === ClientTypes.PJ ? 'CNPJ:' : 'CPF:'}{' '}
                    {client.document}
                </S.ClientInfo>
                <S.ClientInfo>Endereço: {client.address}</S.ClientInfo>
            </S.Header>
            <S.ContentTitle>Historico</S.ContentTitle>
            <S.Content>
                <FlatList
                    data={bills}
                    keyExtractor={bill => bill.id}
                    renderItem={({ item }) => (
                        <Bill
                            description={item.description}
                            amount={item.amount}
                            paid={item.paid}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </S.Content>
            <AddButton onPress={navigateAddBill} />
        </S.Container>
    );
}
