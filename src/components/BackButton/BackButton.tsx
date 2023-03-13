import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {useTheme} from 'styled-components/native';
import {Container} from './styles';

interface BackButtonProps extends TouchableOpacityProps {
    size: number;
}

export function BackButton({size, ...rest}: BackButtonProps) {
    const {goBack} = useNavigation();
    const theme = useTheme();
    return (
        <Container onPress={goBack} {...rest}>
            <Icon name="chevron-left" size={size} color={theme.colors.shape} />
        </Container>
    );
}
