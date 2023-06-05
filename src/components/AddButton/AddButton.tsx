import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

import { Container } from './styles';

export function AddButton({ ...rest }: TouchableOpacityProps) {
    const theme = useTheme();
    return (
        <Container {...rest}>
            <Icon name="plus" size={32} color={theme.colors.shape_dark} />
        </Container>
    );
}
