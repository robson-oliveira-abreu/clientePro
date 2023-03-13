import React from 'react';
import {Container, Title} from './styles';

interface ButtonProps {
    title: string;
    transparent?: boolean;
}

export function Button({title, transparent}: ButtonProps) {
    return (
        <Container transparent={transparent}>
            <Title>{title}</Title>
        </Container>
    );
}
