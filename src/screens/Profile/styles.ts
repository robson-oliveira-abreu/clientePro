import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary};
    align-items: center;
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.success};
    align-items: center;
    padding: 16px 16px 0;
    width: 900px;
    height: 900px;
    border-radius: 450px;
    margin-top: -750px;
    position: relative;
`;

export const ProfileImageWrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.text_details};
    border: 4px solid ${({ theme }) => theme.colors.background_primary};
    width: 150px;
    height: 150px;
    border-radius: 75px;
    bottom: -50px;
    position: absolute;
`;

export const ProfileImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 75px;
`;

export const Content = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_primary};
    margin-top: 60px;
`;

export const CompanyName = styled.Text`
    font-size: ${RFValue(26)}px;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
`;

export const OwnerName = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.text_details};
    text-align: center;
`;

export const ButtomWrapper = styled.View`
    margin: 40px 20px;
`;