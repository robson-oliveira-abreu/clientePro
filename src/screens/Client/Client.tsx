import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {BackButton} from '../../components/BackButton/BackButton';

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
import {Bill} from '../../components/Bill/Bill';
import {useTheme} from 'styled-components/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/app.stack.routes';

import {data} from '../../data';

type ClientScreenProps = NativeStackScreenProps<RootStackParamList, 'Client'>;

export interface BillProps {
    id: number;
    description: string;
    amount: number;
    paid: boolean;
}

export function Client({route}: ClientScreenProps) {
    const params = route.params;

    const theme = useTheme();
    const renderBill = ({item}: ListRenderItemInfo<BillProps>) => {
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
                <TitleName>
                    {params.id} - {params.name}
                </TitleName>
                <ClientInfo>63 98555-0101</ClientInfo>
                <ClientInfo>12.345.678/0001-01</ClientInfo>
                <ClientInfo>Rua: quebrada, quadra: 65, lote: 36</ClientInfo>
            </Header>
            <ContentTitle>Historico</ContentTitle>
            <Content>
                <FlatList
                    data={data.filter(data => !!data.paid)}
                    keyExtractor={bill => String(bill.id)}
                    renderItem={renderBill}
                />
            </Content>
        </Container>
    );
}
