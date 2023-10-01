import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ButtonStyleProps, TextButtonProps } from './types/buttonStyleProps';

export const Container = styled.TouchableOpacity<ButtonStyleProps>`
    width: 100%;
    height: 62px;
    background-color: ${({ theme, transparent }) =>
        !transparent && theme.colors.success};
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 14px;
`;

export const Title = styled.Text<TextButtonProps>`
    color: ${({ theme, transparentButton }) => transparentButton ? theme.colors.text : theme.colors.shape};
    font-size: ${RFValue(20)}px;
    font-weight: 700;
`;
