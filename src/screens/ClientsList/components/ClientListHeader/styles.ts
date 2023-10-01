import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Header = styled.View`
    width: 100%;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(20)}px;
    margin: 20px 0 10px;
`;
