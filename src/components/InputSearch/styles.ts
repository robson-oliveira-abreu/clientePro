import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const Input = styled.TextInput`
    width: 100%;

    background-color: ${({theme}) => theme.colors.background_secondary};
    color: ${({theme}) => theme.colors.text};
    border-radius: 26px;
    font-size: ${RFValue(18)}px;
    padding: 10px 20px;
`;
