import React from 'react';
import { BillType } from '../../types/BillType';
import {
    Container,
    Title,
    RowContent,
    Description,
    Amount,
    RowContentTitle,
    AmountTitle,
} from './styels';

type IBillsCard = {
    bills: BillType[];
};

export function BillsCard({ bills }: IBillsCard) {
    const title = bills[0].clientName;
    const totalAmount = bills.reduce((sum, bill) => sum + bill.amount!, 0);
    
    return (
        <Container>
            <RowContentTitle>
                <Title numberOfLines={1}>{title}</Title>
                <AmountTitle>
                    {totalAmount.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    })}
                </AmountTitle>
            </RowContentTitle>
            {bills.map(bill => {
                return (
                    <RowContent key={bill.id}>
                        <Description numberOfLines={1}>
                            {bill.description}
                        </Description>
                        <Amount>
                            {bill.amount!.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            })}
                        </Amount>
                    </RowContent>
                );
            })}
        </Container>
    );
}
