import React from 'react';
import * as S from './styles';
import { BillProps } from './types/billProps';

export function Bill({
    description,
    client,
    amount,
    paid,
    ...rest
}: BillProps) {
    return (
        <S.Container {...rest}>
            <S.ContentDetails>
                <S.BillTitle numberOfLines={1}>{description}</S.BillTitle>
                {client && (
                    <S.BillDescription numberOfLines={1}>
                        {client}
                    </S.BillDescription>
                )}
            </S.ContentDetails>
            <S.BillAmount paid={paid}>
                {amount.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                })}
            </S.BillAmount>
        </S.Container>
    );
}
