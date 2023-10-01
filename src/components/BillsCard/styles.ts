import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background_secondary};
    padding: 20px;
    border-radius: 20px;
`;

export const RowContentTitle = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding-bottom: 12px;
    width: 100%;
`;

export const Title = styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
    max-width: 50%;
`;

export const AmountTitle = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.danger};
`;


export const RowContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 100%;
`;

export const Description = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text_details};
    flex: 1;
`;

export const Amount = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.danger};
`;

