import React from 'react';
import {TextInputProps} from 'react-native';
import theme from '../../styles/theme';
import {Container} from './styles';

export function Input({...rest}: TextInputProps) {
    return (
        <Container {...rest} placeholderTextColor={theme.colors.text_details} />
    );
}
