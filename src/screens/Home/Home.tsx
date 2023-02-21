import React, {useState} from 'react';
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
    Bill,
    BillClient,
    BillAmount,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {Avatar} from '../../components/Avatar/Avatar';

const initialState = [
    {id: 1, clientName: 'Fulano de tal', amount: '240,00'},
    {id: 2, clientName: 'Cliclano', amount: '240,00'},
    {id: 3, clientName: 'Beltrano', amount: '240,00'},
    {id: 4, clientName: 'Fulano de tal', amount: '240,00'},
    {id: 5, clientName: 'Fulano de tal', amount: '240,00'},
    {id: 6, clientName: 'Fulano de tal', amount: '240,00'},
    {id: 7, clientName: 'Fulano de tal', amount: '240,00'},
    {id: 8, clientName: 'Fulano de tal', amount: '240,00'},
    {id: 9, clientName: 'Fulano de tal', amount: '240,00'},
    {id: 10, clientName: 'Fulano de tal', amount: '240,00'},
    {id: 12, clientName: 'Fulano de tal', amount: '240,00'},
    {id: 13, clientName: 'Fulano de tal', amount: '240,00'},
];

export function Home() {
    const [bills, setBills] = useState(initialState);
    return (
        <Container>
            <Header>
                <HeaderTop>
                    <HomeTitle>A Mais Contabilidade</HomeTitle>
                    <OptionsButton onPress={() => console.log('clicou')}>
                        <Icon name="more-vertical" size={24} color="#fff" />
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
                {bills.map(bill => (
                    <Bill key={bill.id}>
                        <BillClient>{bill.clientName}</BillClient>
                        <BillAmount>R$ {bill.amount}</BillAmount>
                    </Bill>
                ))}
            </Content>
        </Container>
    );
}
