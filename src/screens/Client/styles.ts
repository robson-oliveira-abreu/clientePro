import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background_primary};
`;
export const HeaderButtons = styled.View`
    padding: 14px 8px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Header = styled.View`
    padding: 0 16px;
`;

export const TitleName = styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.text};
`;
export const ClientInfo = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};
`;

export const EditButton = styled.ScrollView`
    max-width: 30px;
`;

export const ContentTitle = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};
    margin: 24px 16px 16px;
`;

export const Content = styled.View`
    flex: 1;
    padding: 0 16px;
`;
