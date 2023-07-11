import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_primary};
`

export const Spinner = styled.ActivityIndicator`
    color: ${({ theme }) => theme.colors.main};
`;