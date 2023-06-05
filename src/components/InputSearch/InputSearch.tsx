import React from 'react';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components/native';
import  Icon from 'react-native-vector-icons/FontAwesome'
import {Container, Input} from './styles';

export function InputSearch({...rest}: TextInputProps) {
    const theme = useTheme();
    return (
        <Container>
            <Input
                placeholder="Pesquisar"
                placeholderTextColor={theme.colors.text_details}
                {...rest}
            />
            <Icon name='search' size={20} color={theme.colors.text_details} />
        </Container>
    );
}
