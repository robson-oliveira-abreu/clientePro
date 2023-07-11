import React from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { Container, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    transparent?: boolean;
    isLoading?: boolean;
}

export function Button({
    title = '',
    isLoading = false,
    transparent = false,
    ...rest
}: ButtonProps) {
    return (
        <Container transparent={transparent} disabled={isLoading} {...rest}>
            {isLoading ? (
                <ActivityIndicator size={30} color="#fff" />
            ) : (
                <Title>{title}</Title>
            )}
        </Container>
    );
}
