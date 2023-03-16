import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Container, Title} from './styles';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    transparent?: boolean;
}

export function Button({title, transparent, ...rest}: ButtonProps) {
    return (
        <Container transparent={transparent} {...rest}>
            <Title>{title}</Title>
        </Container>
    );
}
