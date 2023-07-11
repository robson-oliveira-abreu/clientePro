import React from 'react';
import { ActivityIndicatorProps } from 'react-native';
import * as S from './styles';

export function LoadScreen({
    size = 'large',
    ...rest
}: ActivityIndicatorProps) {
    return (
        <S.Container>
            <S.Spinner {...rest} size={size} />
        </S.Container>
    );
}
