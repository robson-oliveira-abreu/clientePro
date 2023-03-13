import React from 'react';
import {Container, BillDescription, BillAmount} from './styles';

interface BillProps {
    description: string;
    amount: number;
    paid: boolean;
}

export function Bill({description, amount, paid, ...rest}: BillProps) {
    return (
        <Container {...rest}>
            <BillDescription>{description}</BillDescription>
            <BillAmount paid={paid}>R$ {amount}</BillAmount>
        </Container>
    );
}
