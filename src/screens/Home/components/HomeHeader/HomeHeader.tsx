import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { ProfileImage } from '../../../../components/ProfileImage/ProfileImage';
import { FormatCurrencyBRL } from '../../../../utils/FormatCurrencyBRL';

import * as S from './styles';
import { useTheme } from 'styled-components/native';
import { HomeHeaderProps } from './types/HomeHeaderProps';

export function HomeHeader({
    company,
    totals,
    handleOpenOptions,
}: HomeHeaderProps) {
    const { colors } = useTheme();

    return (
        <S.Header>
            <S.HeaderTop>
                <S.HomeTitle>{company?.name!}</S.HomeTitle>
                <S.OptionsButton onPress={handleOpenOptions}>
                    <Icon name="more-vertical" size={30} color={colors.text} />
                </S.OptionsButton>
            </S.HeaderTop>
            <S.HeaderContent>
                <ProfileImage size={120} />
                <S.ContentValues>
                    <S.Amount>{FormatCurrencyBRL(totals.income)}</S.Amount>
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
    );
}
