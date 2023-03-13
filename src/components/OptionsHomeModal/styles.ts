import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #00000050;
`;
export const TouchableClose = styled.TouchableOpacity`
    flex: 1;
    z-index: 9;
`;
export const Content = styled.View`
    background-color: ${({theme}) => theme.colors.shape_dark};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 8px 20px;
`;
export const Button = styled.TouchableOpacity`
    z-index: 99;
    justify-content: center;
    align-items: center;
    margin: 4px 0px;
    padding: 6px;
`;
export const Text = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.main};
`;
