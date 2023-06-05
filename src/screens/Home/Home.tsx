import React, { useContext, useEffect, useMemo, useState } from 'react';
import {
    Modal,
    FlatList,
    ListRenderItemInfo,
    ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { OptionsHomeModal } from '../../components/OptionsHomeModal/OptionsHomeModal';

import { Bill } from '../../components/Bill/Bill';
import { useTheme } from 'styled-components/native';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { CompanyData } from '../CompanyData/CompanyData';

import firestore, {
    FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import { ProfileImage } from '../../components/ProfileImage/ProfileImage';
import { CompanyContext } from '../../context/CompanyContext/CompanyContext';
import { FormatCurrencyBRL } from '../../utils/FormatCurrencyBRL';

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

interface IBills extends FirebaseFirestoreTypes.DocumentData {
    id?: number;
    clientId?: number;
    clientName?: string;
    description?: string;
    amount?: number;
    paid?: boolean;
}
interface ITotalsState {
    totalIncome: number;
    totalMissing: number;
    totalReceived: number;
}

const renderBill = ({ item }: ListRenderItemInfo<IBills>) => {
    return (
        <Bill
            description={item.description!}
            client={item.clientName}
            amount={item.amount!}
            paid={item.paid!}
        />
    );
};

export function Home() {
    const auth = useContext(AuthContext);
    const { company, initializing: initializingCompany } =
        useContext(CompanyContext);
    const theme = useTheme();

    const [bills, setBills] = useState<Array<IBills>>([]);
    const [optionsModal, setOptionsModal] = useState(false);
    const unPaidBills = useMemo(() => bills.filter(bill => !bill.paid), [bills]);
    const totals = getHomeTotals();

    function getHomeTotals() {
        const totalIncome = bills.reduce(
            (total, bill) => total + bill?.amount!,
            0,
        );

        let totalReceived = 0;
        let totalMissing = 0;

        bills.forEach(bill => {
            if (bill?.paid) {
                totalReceived += bill?.amount!;
            } else {
                totalMissing += bill?.amount!;
            }
        });

        return {
            totalIncome,
            totalReceived,
            totalMissing,
        };
    }

    useEffect(() => {
        const companyId = company?.id;
        if (!companyId) {
            return;
        }
        const subscriber = firestore()
            .collection('bills')
            .where('companyId', '==', company?.id)
            .onSnapshot(data => {
                return setBills(data.docs.map(doc => doc.data()));
            });

        return () => subscriber();
    }, [company?.id]);

    return (
        <Container>
            <Content>
                <FlatList
                    data={unPaidBills}
                    renderItem={renderBill}
                    ListHeaderComponent={
                        <Header>
                            <HeaderTop>
                                <HomeTitle>{company?.name!}</HomeTitle>
                                <OptionsButton
                                    onPress={() => {
                                        setOptionsModal(true);
                                    }}
                                >
                                    <Icon
                                        name="more-vertical"
                                        size={30}
                                        color={theme.colors.text}
                                    />
                                </OptionsButton>
                            </HeaderTop>
                            <HeaderContent>
                                <ProfileImage size={120} />
                                <ContentValues>
                                    <Amount>
                                        {FormatCurrencyBRL(totals.totalIncome)}
                                    </Amount>
                                    <AmountReceived>
                                        {FormatCurrencyBRL(
                                            totals.totalReceived,
                                        )}
                                    </AmountReceived>
                                    <AmountReceivable>
                                        {FormatCurrencyBRL(totals.totalMissing)}
                                    </AmountReceivable>
                                </ContentValues>
                            </HeaderContent>
                            <ContentTitle>A Receber</ContentTitle>
                        </Header>
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

            <Modal
                visible={
                    !!auth.user?.uid && !company?.name && !initializingCompany
                }
                animationType="slide"
            >
                <CompanyData />
            </Modal>

            <Modal visible={initializingCompany} transparent>
                <Initializing>
                    <ActivityIndicator size={'large'} />
                </Initializing>
            </Modal>
        </Container>
    );
}
