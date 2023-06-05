import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
    background-color: ${({theme}) => theme.colors.background_secondary};
    border-radius: 26px;
    gap: 6px;
`;

export const Input = styled.TextInput`
    flex: 1;
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(18)}px;
    padding: 10px 0px;
`;
