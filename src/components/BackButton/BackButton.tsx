import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components/native';
import { Container } from './styles';
import { BackButtonProps } from './types/backButtonProps';

export function BackButton({ size, ...rest }: BackButtonProps) {
    const { goBack } = useNavigation();
    const theme = useTheme();

    return (
        <Container onPress={goBack} {...rest}>
            <Icon name="chevron-left" size={size} color={theme.colors.shape} />
        </Container>
    );
}
