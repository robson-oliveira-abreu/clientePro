import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container, Title } from './styles';
import { ButtonProps } from './types/buttonProps';

export function Button({
    title = '',
    isLoading = false,
    transparent = false,
    ...rest
}: ButtonProps) {
    return (
        <Container transparent={transparent} disabled={isLoading} {...rest}>
            {!!isLoading && <ActivityIndicator size={30} color="#fff" />}
            {!isLoading && <Title  transparentButton={transparent}>{title}</Title>}
        </Container>
    );
}
