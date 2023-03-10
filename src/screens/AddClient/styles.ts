import styled from 'styled-components/native';
import {TouchableOpacityProps} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

interface SelectButtonProps extends TouchableOpacityProps {
    isActive: boolean;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background_primary};
    padding: 16px 0 0;
`;

export const Header = styled.View`
    padding: 0 16px;
`;

export const Content = styled.ScrollView`
    flex-grow: 1;
    padding: 0 16px;
`;

export const SelectType = styled.View`
    flex-direction: row;
    margin: 20px 0;
`;
export const SelectButton = styled.TouchableOpacity<SelectButtonProps>`
    padding: 8px 16px;
    margin-right: 14px;
    border-radius: 14px;
    background-color: ${({theme, isActive}) =>
        isActive ? theme.colors.success : theme.colors.background_secondary};
`;
export const TextSelect = styled.Text`
    font-size: ${RFValue(18)}px;
`;

export const ButtonWrapper = styled.View`
    margin-top: 32px;
`;
