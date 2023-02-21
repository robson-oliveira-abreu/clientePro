import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background_primary};
    padding: 0 20px;
`;

export const Header = styled.View`
    width: 100%;
`;

export const HeaderTop = styled.View`
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    margin: 20px 0 20px;
`;

export const HomeTitle = styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.text};
`;
export const OptionsButton = styled.TouchableWithoutFeedback``;

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
    justify-content: center;
`;

export const Amount = styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.text};
`;

export const AmountReceived = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.success};
`;

export const AmountReceivable = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.danger};
`;

export const Content = styled.View`
    width: 100%;
`;

export const ContentTitle = styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.text};
    margin: 20px 0 10px;
`;

export const Bill = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

    margin: 6px 0;
    padding: 16px;
    border-radius: 10px;
    border: 1px solid;

    background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const BillClient = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.text};
`;

export const BillAmount = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.danger};
`;
