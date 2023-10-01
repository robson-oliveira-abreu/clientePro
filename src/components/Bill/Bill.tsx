import React from 'react';
import * as S from './styles';
import { BillProps } from './types/billProps';
import { FormatCurrencyBRL } from '../../utils/FormatCurrencyBRL';
import { globalStyles } from '../../styles/globalStyles';

export function Bill({
    description,
    client,
    amount,
    paid,
    ...rest
}: BillProps) {
    return (
        <S.Container {...rest} style={[globalStyles.shadow_sm]}>
            <S.ContentDetails>
                <S.BillTitle numberOfLines={1}>{description}</S.BillTitle>
                {client && (
                    <S.BillDescription numberOfLines={1}>
                        {client}
                    </S.BillDescription>
                )}
            </S.ContentDetails>
            <S.BillAmount paid={paid}>{FormatCurrencyBRL(amount)}</S.BillAmount>
        </S.Container>
    );
}
