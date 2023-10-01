import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { AmountTextProps } from './types/amoutTextProps';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

    margin: 6px 0;
    padding: 16px;
    border-radius: 10px;
    gap: 4px;

    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const ContentDetails = styled.View`
    flex: 1;
`;

export const BillTitle = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.text};
    max-width: 90%;
`;

export const BillDescription = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text_details};
`;

export const BillAmount = styled.Text<AmountTextProps>`
    font-size: ${RFValue(18)}px;
    color: ${({ theme, paid }) =>
        paid ? theme.colors.success : theme.colors.danger};
`;
