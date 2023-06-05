import React from 'react';
import { TextInputProps, TextInput } from 'react-native';
import theme from '../../styles/theme';
import { Container, Input } from './styles';

export function InputPassword({ ...rest }: TextInputProps) {
    return (
        <Container>
            <Input
                secureTextEntry={true}
                autoCorrect={false}
                placeholderTextColor={theme.colors.text_details}
                {...rest}
            />
        </Container>
    );
}
