import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 62px;
    padding: 0 26px;
    margin-bottom: 16px;

    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const Input = styled.TextInput`
    width: 100%;
    height: 100%;
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(18)}px;
`;
