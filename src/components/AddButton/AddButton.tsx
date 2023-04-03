import React from 'react';
import { useTheme } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

import { Container } from './styles';

export function AddButton({ ...rest }) {
    const theme = useTheme();
    return (
        <Container {...rest}>
            <Icon name="plus" size={32} color={theme.colors.shape_dark} />
        </Container>
    );
}
