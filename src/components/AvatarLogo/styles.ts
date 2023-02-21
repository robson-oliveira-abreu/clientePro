import styled from 'styled-components/native';

export const Container = styled.View`
  width: 160px;
  height: 160px;

  border: 1px solid;
  border-color: ${({theme}) => theme.colors.main};
  overflow: hidden;
  border-radius: 80px;
`;

export const AvatarImage = styled.Image`
  width: 100%;
  height: 100%;
`;
