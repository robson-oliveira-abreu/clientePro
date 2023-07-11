import React, { ReactNode } from 'react';
import * as S from './styles';

export function NavigationBackground({ children }: { children: ReactNode }) {
    return (
        <S.NavigationBackgroundContainer>
            {children}
        </S.NavigationBackgroundContainer>
    );
}
