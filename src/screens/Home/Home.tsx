import React, {useState} from 'react';
import {Modal, FlatList, ListRenderItemInfo} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Avatar} from '../../components/Avatar/Avatar';
import {OptionsHomeModal} from '../../components/OptionsHomeModal/OptionsHomeModal';

import {
    Container,
    Header,
    HomeTitle,
    OptionsButton,
    HeaderTop,
    HeaderContent,
    ContentValues,
    Amount,
    AmountReceived,
    AmountReceivable,
    Content,
    ContentTitle,
} from './styles';

import {data} from '../../data';
import {Bill} from '../../components/Bill/Bill';
import {useTheme} from 'styled-components/native';

interface BillsHomeProps {
    id: number;
    clientName: string;
    amount: number;
    paid: boolean;
}

const renderBill = ({item}: ListRenderItemInfo<BillsHomeProps>) => {
    return (
        <Bill
            description={item.clientName}
            amount={item.amount}
            paid={item.paid}
        />
    );
};

export function Home() {
    const [bills, setBills] = useState(data.filter(dat => !dat.paid));
    const [optionsModal, setOptionsModal] = useState(false);
    const theme = useTheme();

    return (
        <Container>
            <Header>
                <HeaderTop>
                    <HomeTitle>A Mais Contabilidade</HomeTitle>
                    <OptionsButton
                        onPress={() => {
                            setBills(data);
                            setOptionsModal(true);
                        }}>
                        <Icon
                            name="more-vertical"
                            size={30}
                            color={theme.colors.text}
                        />
                    </OptionsButton>
                </HeaderTop>
                <HeaderContent>
                    <Avatar
                        source="https://github.com/robson-oliveira-abreu.png"
                        size={120}
                    />
                    <ContentValues>
                        <Amount>R$ 12.000,00</Amount>
                        <AmountReceived>R$ 5.800,00</AmountReceived>
                        <AmountReceivable>R$ 4.500,00</AmountReceivable>
                    </ContentValues>
                </HeaderContent>
            </Header>
            <Content>
                <ContentTitle>A Receber</ContentTitle>
                <FlatList data={bills} renderItem={renderBill} />
            </Content>
            <Modal
                visible={optionsModal}
                onRequestClose={() => setOptionsModal(false)}
                transparent
                animationType="slide">
                <OptionsHomeModal handleClose={() => setOptionsModal(false)} />
            </Modal>
        </Container>
    );
}
