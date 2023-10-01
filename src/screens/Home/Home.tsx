import React from 'react';
import {
    Modal,
    FlatList,
    ListRenderItemInfo,
    ActivityIndicator,
} from 'react-native';
import { OptionsHomeModal } from './components/OptionsHomeModal/OptionsHomeModal';

import { Bill } from '../../components/Bill/Bill';
import { useTheme } from 'styled-components/native';
import { CompanyData } from '../CompanyData/CompanyData';

import { useHomeScreen } from './useHomeScreen';
import { Bill as BillModel } from '../../models/Bill';

import * as S from './styles';
import BottomSheet, {
    BottomSheetBackdrop,
    BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import Animated, { SlideInRight } from 'react-native-reanimated';
import { HomeHeader } from './components/HomeHeader/HomeHeader';

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

    const renderItem = ({ item, index }: ListRenderItemInfo<BillModel>) => (
        <Animated.View
            entering={SlideInRight.delay(50 * (index > 10 ? 10 : index))}
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
                        <HomeHeader
                            company={company}
                            totals={totals}
                            handleOpenOptions={handleOpenOptions}
                        />
                    }
                    showsVerticalScrollIndicator={false}
                    stickyHeaderIndices={[0]}
                    stickyHeaderHiddenOnScroll
                    contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
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
