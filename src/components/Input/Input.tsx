import React from 'react';
import {TextInputProps} from 'react-native';
import theme from '../../styles/theme';
import {Container} from './styles';

export function Input(props: TextInputProps) {
  return (
    <Container {...props} placeholderTextColor={theme.colors.text_details} />
  );
}
