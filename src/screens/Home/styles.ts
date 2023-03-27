import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary};
    padding: 0 16px;
`;

export const Header = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const HeaderTop = styled.View`
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    margin: 20px 0;
`;

export const HomeTitle = styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
`;

export const OptionsButton = styled.TouchableWithoutFeedback`
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled.Text`
    font-size: ${RFValue(18)}px;
`;

export const HeaderContent = styled.View`
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
`;

export const ContentValues = styled.View`
    width: 60%;
    align-items: flex-end;
    justify-content: flex-start;
    padding-top: 28px;
    padding-right: 8px;
`;

export const Amount = styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
`;

export const AmountReceived = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.success};
`;

export const AmountReceivable = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.danger};
`;

export const Content = styled.View`
    width: 100%;
    flex: 1;
`;

export const ContentTitle = styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 10px;
`;

export const Initializing = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary};
    justify-content: center;
    align-items: center;
`;
