import React from 'react';
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
import { CompanyData } from '../CompanyData/CompanyData';
import { ProfileImage } from '../../components/ProfileImage/ProfileImage';
import { FormatCurrencyBRL } from '../../utils/FormatCurrencyBRL';

import { useHomeScreen } from './useHomeScreen';
import { Bill as BillType } from '../../types/Bill';

import * as S from './styles';

export function Home() {
    const theme = useTheme();
    const {
        auth,
        unPaidBills,
        company,
        setOptionsModal,
        totals,
        optionsModal,
        initializingCompany,
    } = useHomeScreen();

    return (
        <S.Container>
            <S.Content>
                <FlatList
                    data={unPaidBills}
                    renderItem={({ item }: ListRenderItemInfo<BillType>) => (
                        <Bill
                            description={item.description!}
                            client={item.clientName}
                            amount={item.amount!}
                            paid={item.paid!}
                        />
                    )}
                    ListHeaderComponent={
                        <S.Header>
                            <S.HeaderTop>
                                <S.HomeTitle>{company?.name!}</S.HomeTitle>
                                <S.OptionsButton
                                    onPress={() => {
                                        setOptionsModal(true);
                                    }}
                                >
                                    <Icon
                                        name="more-vertical"
                                        size={30}
                                        color={theme.colors.text}
                                    />
                                </S.OptionsButton>
                            </S.HeaderTop>
                            <S.HeaderContent>
                                <ProfileImage size={120} />
                                <S.ContentValues>
                                    <S.Amount>
                                        {FormatCurrencyBRL(totals.totalIncome)}
                                    </S.Amount>
                                    <S.AmountReceived>
                                        {FormatCurrencyBRL(
                                            totals.totalReceived,
                                        )}
                                    </S.AmountReceived>
                                    <S.AmountReceivable>
                                        {FormatCurrencyBRL(totals.totalMissing)}
                                    </S.AmountReceivable>
                                </S.ContentValues>
                            </S.HeaderContent>
                            <S.ContentTitle>A Receber</S.ContentTitle>
                        </S.Header>
                    }
                    showsVerticalScrollIndicator={false}
                    stickyHeaderIndices={[0]}
                    stickyHeaderHiddenOnScroll
                />
            </S.Content>

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
                <S.Initializing>
                    <ActivityIndicator size={'large'} />
                </S.Initializing>
            </Modal>
        </S.Container>
    );
}
