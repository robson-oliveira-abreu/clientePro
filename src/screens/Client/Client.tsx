import React, { useEffect, useState } from 'react';
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

import firestore, {
    FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

import { RootStackParamList } from '../../routes/app.stack.routes';
import { AddButton } from '../../components/AddButton/AddButton';
import { isEqual } from 'lodash';
import { BillType } from '../../types/BillType';

type ClientScreenProps = NativeStackScreenProps<RootStackParamList, 'Client'>;

export function Client({ route, navigation }: ClientScreenProps) {
    const { client } = route.params;
    const [bills, setBills] = useState<Partial<BillType>[]>([]);

    const theme = useTheme();
    const renderBill = ({
        item,
    }: ListRenderItemInfo<FirebaseFirestoreTypes.DocumentData>) => {
        return (
            <Bill
                description={item.description}
                amount={item.amount}
                paid={item.paid}
            />
        );
    };

    useEffect(() => {
        if (!client.document) {
            return;
        }
        const subscriber = firestore()
            .collection('bills')
            .where('clientId', '==', client.id)
            .onSnapshot(documentSnapshot => {
                const newBills = documentSnapshot.docs.map(doc => doc.data());
                if (!isEqual(newBills, bills)) {
                    setBills(newBills);
                }
            });

        // Stop listening for updates when no longer required
        return () => subscriber();
    }, [client.document, bills]);

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
                    data={bills}
                    keyExtractor={bill => bill.id!}
                    renderItem={renderBill}
                />
            </Content>
            <AddButton
                onPress={() => navigation.navigate('AddBills', { client })}
            />
        </Container>
    );
}
