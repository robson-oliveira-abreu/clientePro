import React from 'react';

import { InputSearch } from '../../../../components/InputSearch/InputSearch';

import * as S from './styles';
import { ClientListHeaderProps } from './types/ClientListHeaderProps';

export function ClientListHeader({
    setFilterValue,
    filterValue,
}: ClientListHeaderProps) {
    return (
        <>
            <S.Header>
                <InputSearch
                    onChangeText={setFilterValue}
                    value={filterValue}
                />
            </S.Header>
            <S.Title>Clientes</S.Title>
        </>
    );
}
