import React, { useState, useContext } from 'react';
import { Button } from '../../components/Button/button';
import { Input } from '../../components/Input/Input';
import { ProfileImage } from '../../components/ProfileImage/ProfileImage';
import { Container } from './styles';
import { CompanyContext } from '../../context/CompanyContext/CompanyContext';

export function CompanyData() {
    const [companyName, setCompanyName] = useState('');
    const [name, setName] = useState('');

    const company = useContext(CompanyContext);

    const handleSaveCompany = () => {
        if (!companyName && !name) {
            return;
        }
        company.handleSaveCompany(companyName, name);
    };

    return (
        <Container>
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
        </Container>
    );
}
