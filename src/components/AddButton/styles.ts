import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    flex: 1;
    height: 50px;
    width: 50px;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: ${({theme}) => theme.colors.main};
    bottom: 20px;
    right: 20px;
    border-radius: 25px;
`;
