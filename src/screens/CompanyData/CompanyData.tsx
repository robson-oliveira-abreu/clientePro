import React from 'react';
import { Button } from '../../components/Button/button';
import { Input } from '../../components/Input/Input';
import { ProfileImage } from '../../components/ProfileImage/ProfileImage';
import * as S from './styles';
import { useCompanyDataScreen } from './useCompanyDataScreen';

export function CompanyData() {
    const { companyName, name, setName, handleSaveCompany, setCompanyName } =
        useCompanyDataScreen();
    return (
        <S.Container>
            <ProfileImage size={150} />
            <Input
                placeholder="Nome da Empresa"
                value={companyName}
                onChangeText={setCompanyName}
            />
            <Input placeholder="Nome" value={name} onChangeText={setName} />
            <Button
                title="Salvar"
                style={{ marginTop: 40 }}
                onPress={handleSaveCompany}
            />
        </S.Container>
    );
}
