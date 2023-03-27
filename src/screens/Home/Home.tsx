import React, { useContext, useEffect, useState } from 'react';
import {
    Modal,
    FlatList,
    ListRenderItemInfo,
    ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { OptionsHomeModal } from '../../components/OptionsHomeModal/OptionsHomeModal';

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
    Initializing,
} from './styles';

import { data } from '../../data';
import { Bill } from '../../components/Bill/Bill';
import { useTheme } from 'styled-components/native';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { CompanyData } from '../CompanyData/CompanyData';

import firestore, {
    FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import { ProfileImage } from '../../components/ProfileImage/ProfileImage';
import { CompanyContext } from '../../context/CompanyContext/CompanyContext';

interface BillsHomeProps {
    id: number;
    clientName: string;
    amount: number;
    paid: boolean;
}
interface FlatListHeaderProps {
    name: string;
    handleSetBills: () => void;
    color: string;
}

const renderBill = ({ item }: ListRenderItemInfo<BillsHomeProps>) => {
    return (
        <Bill
            description={item.clientName}
            amount={item.amount}
            paid={item.paid}
        />
    );
};

const FlatListHeader = ({
    name,
    handleSetBills,
    color,
}: FlatListHeaderProps) => (
    <Header>
        <HeaderTop>
            <HomeTitle>{name}</HomeTitle>
            <OptionsButton onPress={handleSetBills}>
                <Icon name="more-vertical" size={30} color={color} />
            </OptionsButton>
        </HeaderTop>
        <HeaderContent>
            <ProfileImage size={120} />
            <ContentValues>
                <Amount>R$ 12.000,00</Amount>
                <AmountReceived>R$ 5.800,00</AmountReceived>
                <AmountReceivable>R$ 4.500,00</AmountReceivable>
            </ContentValues>
        </HeaderContent>
        <ContentTitle>A Receber</ContentTitle>
    </Header>
);

export function Home() {
    const [bills, setBills] = useState(data.filter(dat => !dat.paid));
    const [optionsModal, setOptionsModal] = useState(false);
    const theme = useTheme();

    const [clients, setClients] = useState<
        FirebaseFirestoreTypes.DocumentData[] | null
    >(null);

    const auth = useContext(AuthContext);
    const { company, initializing: initializingCompany } =
        useContext(CompanyContext);

    useEffect(() => {
        const fetchClients = () => {
            if (clients) {
                return;
            }
            firestore()
                .collection('company')
                .doc(auth.user?.uid)
                .collection('clients')
                .get()
                .then(clientsList => {
                    setClients(clientsList.docs);
                });
        };
        fetchClients();
    }, [auth.user?.uid, clients]);

    return (
        <Container>
            <Content>
                <FlatList
                    data={bills}
                    renderItem={renderBill}
                    ListHeaderComponent={
                        <FlatListHeader
                            name={company?.name}
                            handleSetBills={() => {
                                setBills(data);
                                setOptionsModal(true);
                            }}
                            color={theme.colors.text}
                        />
                    }
                    stickyHeaderIndices={[0]}
                    stickyHeaderHiddenOnScroll
                />
            </Content>

            <Modal
                visible={optionsModal}
                onRequestClose={() => setOptionsModal(false)}
                transparent
                animationType="slide"
            >
                <OptionsHomeModal handleClose={() => setOptionsModal(false)} />
            </Modal>

            {auth.user?.uid && !company?.name && (
                <Modal
                    visible={!!(auth.user?.uid && !company?.name)}
                    animationType="slide"
                >
                    <CompanyData />
                </Modal>
            )}
            <Modal visible={initializingCompany} transparent>
                <Initializing>
                    <ActivityIndicator size={'large'} />
                </Initializing>
            </Modal>
        </Container>
    );
}
