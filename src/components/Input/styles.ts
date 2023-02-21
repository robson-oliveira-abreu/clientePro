import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TextInput`
  width: 100%;
  height: 62px;
  padding: 0 26px;
  margin-bottom: 32px;

  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.background_secondary};
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(18)}px;
`;
