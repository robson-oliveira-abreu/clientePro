import React from 'react';
import {
    Modal,
    FlatList,
    ListRenderItemInfo,
    ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { OptionsHomeModal } from './components/OptionsHomeModal/OptionsHomeModal';

import { Bill } from '../../components/Bill/Bill';
import { useTheme } from 'styled-components/native';
import { CompanyData } from '../CompanyData/CompanyData';
import { ProfileImage } from '../../components/ProfileImage/ProfileImage';
import { FormatCurrencyBRL } from '../../utils/FormatCurrencyBRL';

import { useHomeScreen } from './useHomeScreen';
import { Bill as BillType } from '../../types/Bill';

import * as S from './styles';
import BottomSheet, {
    BottomSheetBackdrop,
    BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import Animated, { Easing, SlideInRight } from 'react-native-reanimated';

export function Home() {
    const theme = useTheme();
    const {
        isAuth,
        unPaidBills,
        company,
        totals,
        initializingCompany,
        bottomSheetRef,
        snapPoints,
        loading,
        handleOpenOptions,
        handleSheetChanges,
        handleCloseOptions,
    } = useHomeScreen();

    const renderBackdrop = React.useCallback(
        (props: BottomSheetBackdropProps) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={0}
                appearsOnIndex={1}
                onPress={handleCloseOptions}
            />
        ),
        [],
    );

    const renderItem = ({ item, index }: ListRenderItemInfo<BillType>) => (
        <Animated.View
            entering={SlideInRight.delay(50 * (index > 10 ? 10 : index + 1))}
        >
            <Bill
                description={item.description!}
                client={item.clientName}
                amount={item.amount!}
                paid={item.paid!}
            />
        </Animated.View>
    );

    return (
        <S.Container>
            <S.Content>
                <FlatList
                    data={unPaidBills}
                    renderItem={renderItem}
                    ListHeaderComponent={
                        <S.Header>
                            <S.HeaderTop>
                                <S.HomeTitle>{company?.name!}</S.HomeTitle>
                                <S.OptionsButton onPress={handleOpenOptions}>
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
                                        {FormatCurrencyBRL(totals.income)}
                                    </S.Amount>
                                    <S.AmountReceived>
                                        {FormatCurrencyBRL(totals.received)}
                                    </S.AmountReceived>
                                    <S.AmountReceivable>
                                        {FormatCurrencyBRL(totals.missing)}
                                    </S.AmountReceivable>
                                </S.ContentValues>
                            </S.HeaderContent>
                            <S.ContentTitle>A Receber</S.ContentTitle>
                        </S.Header>
                    }
                    showsVerticalScrollIndicator={false}
                    stickyHeaderIndices={[0]}
                    stickyHeaderHiddenOnScroll
                    ListEmptyComponent={
                        loading ? (
                            <S.Initializing>
                                <ActivityIndicator
                                    size={'large'}
                                    color={theme.colors.main}
                                />
                            </S.Initializing>
                        ) : (
                            <></>
                        )
                    }
                />
            </S.Content>

            <BottomSheet
                ref={bottomSheetRef}
                index={0}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                enablePanDownToClose={true}
                backgroundStyle={{
                    backgroundColor: theme.colors.background_secondary,
                }}
                backdropComponent={renderBackdrop}
            >
                <OptionsHomeModal />
            </BottomSheet>

            <Modal
                visible={isAuth && !company?.name && !initializingCompany}
                animationType="slide"
            >
                <CompanyData />
            </Modal>

            <Modal visible={initializingCompany} transparent>
                <S.Initializing>
                    <ActivityIndicator
                        size={'large'}
                        color={theme.colors.main}
                    />
                </S.Initializing>
            </Modal>
        </S.Container>
    );
}
