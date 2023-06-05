import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 16px 16px 0px;
  background-color: ${({theme})=> theme.colors.background_primary};
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(20)}px;
    margin: 20px 0 10px;
`;