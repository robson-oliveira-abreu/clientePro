import React from 'react';
import * as S from './styles';
import { useEditCompanyData } from './useEditCompanyData';
import { Input } from '../../../../components/Input/Input';
import { Button } from '../../../../components/Button/button';

export function EditCompanyData() {
    const { handleSubmit } = useEditCompanyData();
    return (
        <S.Container>
            <Input placeholder="Nome da Empresa" />
            <Input placeholder="Nome Proprietário" />
            <Button title="Salvar" isLoading={false} />
        </S.Container>
    );
}
