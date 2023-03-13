import {RFValue} from 'react-native-responsive-fontsize';
import {TextProps} from 'react-native';
import styled from 'styled-components/native';

interface AmountTextProps extends TextProps {
    paid: boolean;
}

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

    margin: 6px 0;
    padding: 16px;
    border-radius: 10px;
    border: 1px solid;

    background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const BillDescription = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.text};
`;

export const BillAmount = styled.Text<AmountTextProps>`
    font-size: ${RFValue(18)}px;
    color: ${({theme, paid}) =>
        paid ? theme.colors.success : theme.colors.danger};
`;
