import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Header = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const HeaderTop = styled.View`
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    margin: 10px 0;
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

export const ContentTitle = styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 10px;
`;