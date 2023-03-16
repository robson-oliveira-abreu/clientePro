import styled from 'styled-components/native';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background_primary};
    align-items: center;
    padding: 0 20px;
`;

export const Header = styled.View`
    margin-top: ${RFValue(60) + getStatusBarHeight()}px;
`;

export const Form = styled.View`
    width: 100%;
    margin-top: ${RFValue(32)}px;
`;

export const Footer = styled.View`
    width: 100%;
    margin-top: 24px;
    margin-bottom: ${getBottomSpace() + 20}px;
`;
