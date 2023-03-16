import styled from 'styled-components/native';

export const Container = styled.TouchableWithoutFeedback`
    width: 100%;
`;

export const Image = styled.Image`
    width: 100%;
    border: 2px ${({theme}) => theme.colors.main};
    margin: 20px 0 40px;
`;
