import React, {useContext, useEffect, useState} from 'react';
import {
    Modal,
    FlatList,
    ListRenderItemInfo,
    ActivityIndicator,
    View,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
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
import {AuthContext} from '../../context/AuthContext/AuthContext';
import {CompanyData} from '../CompanyData/CompanyData';

import firestore, {
    FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {ProfileImage} from '../../components/ProfileImage/ProfileImage';

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
    const [initializingCompany, setInitializingCompany] = useState(false);
    const [company, setCompany] =
        useState<FirebaseFirestoreTypes.DocumentData | null>(null);
    const [clients, setClients] = useState<
        FirebaseFirestoreTypes.DocumentData[] | null
    >(null);

    const auth = useContext(AuthContext);

    useEffect(() => {
        const fecthCompany = async () => {
            if (company?.name) {
                return;
            }
            setInitializingCompany(true);

            firestore()
                .collection('company')
                .doc(auth?.user?.uid)
                .get()
                .then(res => {
                    const newState = res.data();
                    if (newState) {
                        setCompany(newState);
                    }
                    setInitializingCompany(false);
                });
        };
        fecthCompany();
    }, [company?.name, initializingCompany, auth?.user?.uid]);

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
            <Header>
                <HeaderTop>
                    <HomeTitle>{company?.name}</HomeTitle>
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
                    <ProfileImage size={120} />
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

            {auth.user?.uid && !company?.name && (
                <Modal
                    visible={!!(auth.user?.uid && !company?.name)}
                    animationType="slide">
                    <CompanyData user={auth.user} setCompany={setCompany} />
                </Modal>
            )}
            <Modal visible={initializingCompany} transparent>
                <View style={styles.initializing}>
                    <ActivityIndicator size={'large'} />
                </View>
            </Modal>
        </Container>
    );
}

const styles = StyleSheet.create({
    initializing: {
        flex: 1,
        backgroundColor: '#00000080',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
