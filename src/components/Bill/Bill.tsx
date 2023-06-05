import React from 'react';
import { View } from 'react-native';
import {
    Container,
    BillDescription,
    BillAmount,
    BillTitle,
    ContentDetails,
} from './styles';

interface BillProps {
    description: string;
    client?: string;
    amount: number;
    paid: boolean;
}

export function Bill({
    description,
    client,
    amount,
    paid,
    ...rest
}: BillProps) {
    return (
        <Container {...rest}>
            <ContentDetails>
                <BillTitle numberOfLines={1}>{description}</BillTitle>
                {client && (
                    <BillDescription numberOfLines={1}>
                        {client}
                    </BillDescription>
                )}
            </ContentDetails>
            <BillAmount paid={paid}>
                {amount.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                })}
            </BillAmount>
        </Container>
    );
}
