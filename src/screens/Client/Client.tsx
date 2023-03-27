import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { BackButton } from '../../components/BackButton/BackButton';

import {
    Container,
    HeaderButtons,
    Header,
    Content,
    EditButton,
    TitleName,
    ClientInfo,
    ContentTitle,
} from './styles';
import { Bill } from '../../components/Bill/Bill';
import { useTheme } from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { data } from '../../data';
import { RootStackParamList } from '../../routes/app.stack.routes';

type ClientScreenProps = NativeStackScreenProps<RootStackParamList, 'Client'>;

export interface BillProps {
    id: number;
    description: string;
    amount: number;
    paid: boolean;
}

export function Client({ route }: ClientScreenProps) {
    const { client } = route.params;

    console.log({ client });

    const theme = useTheme();
    const renderBill = ({ item }: ListRenderItemInfo<BillProps>) => {
        return (
            <Bill
                description={item.description}
                amount={item.amount}
                paid={item.paid}
            />
        );
    };

    return (
        <Container>
            <HeaderButtons>
                <BackButton size={30} />
                <EditButton>
                    <Icon
                        name="more-vertical"
                        size={30}
                        color={theme.colors.text}
                    />
                </EditButton>
            </HeaderButtons>

            <Header>
                <TitleName>{client?.name}</TitleName>
                <ClientInfo>Responsavel: {client?.responsible}</ClientInfo>
                <ClientInfo>Telefone: {client?.phone}</ClientInfo>
                <ClientInfo>
                    {client.clientType === 'PJ' ? 'CNPJ:' : 'CPF:'}{' '}
                    {client?.document}
                </ClientInfo>
                <ClientInfo>Endereço: {client?.address}</ClientInfo>
            </Header>
            <ContentTitle>Historico</ContentTitle>
            <Content>
                <FlatList
                    data={data.filter(d => !!d.paid)}
                    keyExtractor={bill => String(bill.id)}
                    renderItem={renderBill}
                />
            </Content>
        </Container>
    );
}
