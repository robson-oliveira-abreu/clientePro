import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary};
    padding-top: 20px;
`;

export const Header = styled.View`
    padding: 0 16px;
`;

export const Title = styled.Text`
    margin-top: 20px;
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
`;

export const Content = styled.ScrollView`
    flex-grow: 1;
    margin-top: 20px;
    padding: 0 16px;
`;

export const ButtonWrapper = styled.View`
    margin-top: 32px;
`;

export const DateButton = styled.TouchableOpacity`
    width: 100%;
    height: 62px;
    background-color: ${({ theme }) => theme.colors.background_secondary};
    justify-content: center;
    align-items: flex-start;
    padding: 0px 26px;
    border-radius: 10px;
    margin-bottom: 14px;
`;

export const ButtonTitle = styled.Text`
    color: ${({ theme }) => theme.colors.text_details};
    font-size: ${RFValue(18)}px;
`;
