import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

interface StyledButtonProps extends TouchableOpacityProps {
  transparent: boolean;
}

export const Container = styled.TouchableOpacity<StyledButtonProps>`
  width: 100%;
  height: 62px;
  background-color: ${({theme, transparent}) =>
    !transparent && theme.colors.main};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 14px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(20)}px;
  font-weight: 700;
`;
