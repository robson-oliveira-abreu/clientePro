import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 16px 16px 0;
    background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
    width: 100%;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(20)}px;
    margin: 20px 0 10px;
`;

export const CardCLient = styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.background_secondary};
    margin: 6px 0;
    border-radius: 10px;
    justify-content: center;
    padding: 0 20px;
`;

export const CardCLientTitle = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(18)}px;
`;
