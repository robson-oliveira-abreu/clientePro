import React from 'react';
import * as S from './styles';
import { Button } from '../../components/Button/button';
import BottomSheet, {
    BottomSheetBackdrop,
    BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import { useProfile } from './useProfile';
import { useTheme } from 'styled-components';
import { EditCompanyData } from './components/EditCompanyData/EditCompanyData';

export function Profile() {
    const { colors } = useTheme();
    const {
        company,
        bottomSheetRef,
        snapPoints,
        handleSheetChanges,
        handleOpenModal,
        handleCloseModal,
    } = useProfile();

    const renderBackdrop = (props: BottomSheetBackdropProps) => {
        return (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={0}
                appearsOnIndex={1}
                onPress={handleCloseModal}
            />
        );
    };
    return (
        <S.Container>
            <S.Header>
                <S.ProfileImageWrapper>
                    <S.ProfileImage
                        source={{
                            uri: 'https://github.com/robson-oliveira-abreu.png',
                        }}
                    />
                </S.ProfileImageWrapper>
            </S.Header>

            <S.Content>
                <S.CompanyName>{company?.name}</S.CompanyName>
                <S.OwnerName>{company?.owner}</S.OwnerName>
                <S.ButtomWrapper>
                    <Button title="Alterar dados" onPress={handleOpenModal} />
                </S.ButtomWrapper>
            </S.Content>
            <BottomSheet
                ref={bottomSheetRef}
                index={0}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                enablePanDownToClose={true}
                backgroundStyle={{
                    backgroundColor: colors.background_primary,
                }}
                backdropComponent={renderBackdrop}
            >
                <EditCompanyData />
            </BottomSheet>
        </S.Container>
    );
}
