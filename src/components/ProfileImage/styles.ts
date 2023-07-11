import styled from 'styled-components/native';

export const Container = styled.TouchableWithoutFeedback`
    width: 100%;
`;

export const ImageWrapper = styled.View`
    border: 1px solid ${({ theme }) => theme.colors.main};
    margin: 10px 0;
    overflow: hidden;
`;

export const Image = styled.Image`
    width: 100%;
`;
