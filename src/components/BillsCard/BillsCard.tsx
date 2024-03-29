import React from 'react';
import * as S from './styles';
import { BillsCardProps } from './types/billsCardProps';
import { FormatCurrencyBRL } from '../../utils/FormatCurrencyBRL';
import { globalStyles } from '../../styles/globalStyles';

export function BillsCard({ bills }: BillsCardProps) {
    const title = bills[0].clientName;
    const totalAmount = bills.reduce((sum, bill) => sum + bill.amount!, 0);

    return (
        <S.Container style={[globalStyles.shadow_sm]}>
            <S.RowContentTitle>
                <S.Title numberOfLines={1}>{title}</S.Title>
                <S.AmountTitle>{FormatCurrencyBRL(totalAmount)}</S.AmountTitle>
            </S.RowContentTitle>
            {bills.map(bill => {
                return (
                    <S.RowContent key={bill.id}>
                        <S.Description numberOfLines={1}>
                            {bill.description}
                        </S.Description>
                        <S.Amount>{FormatCurrencyBRL(bill.amount!)}</S.Amount>
                    </S.RowContent>
                );
            })}
        </S.Container>
    );
}
