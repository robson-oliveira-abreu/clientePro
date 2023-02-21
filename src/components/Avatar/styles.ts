import styled from 'styled-components/native';
import {ViewProps} from 'react-native';

interface AvatarViewProps extends ViewProps {
    size: number;
}

export const Container = styled.View<AvatarViewProps>`
    width: ${({size}) => size}px;
    height: ${({size}) => size}px;

    border: 4px solid;
    border-color: ${({theme}) => theme.colors.main};
    overflow: hidden;
    border-radius: 80px;
`;

export const AvatarImage = styled.Image`
    width: 100%;
    height: 100%;
`;
