import styled from 'styled-components/native';
import { AvatarViewProps } from './types/AvatarViewProps';

export const Container = styled.View<AvatarViewProps>`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;

    border: 4px solid;
    border-color: ${({ theme }) => theme.colors.main};
    overflow: hidden;
    border-radius: 80px;
`;

export const AvatarImage = styled.Image`
    width: 100%;
    height: 100%;
`;
