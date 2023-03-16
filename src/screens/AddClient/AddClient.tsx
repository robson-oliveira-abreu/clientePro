import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {BackButton} from '../../components/BackButton/BackButton';
import {Button} from '../../components/Button/button';
import {Input} from '../../components/Input/Input';
import {
    Container,
    Header,
    Content,
    SelectType,
    SelectButton,
    TextSelect,
    ButtonWrapper,
} from './styles';

export function AddClient() {
    const [clientType, setCLientType] = useState<'PJ' | 'PF'>('PJ');
    const navigation = useNavigation();
    return (
        <Container>
            <Header>
                <BackButton size={30} onPress={() => navigation.goBack()} />
            </Header>
            <Content>
                <SelectType>
                    <SelectButton
                        isActive={clientType === 'PJ'}
                        onPress={() => setCLientType('PJ')}>
                        <TextSelect>PJ</TextSelect>
                    </SelectButton>
                    <SelectButton
                        isActive={clientType === 'PF'}
                        onPress={() => setCLientType('PF')}>
                        <TextSelect>Pessoa Fisica</TextSelect>
                    </SelectButton>
                </SelectType>
                <Input
                    placeholder={
                        clientType === 'PJ' ? 'Nome Fantasia' : 'Nome Cliente'
                    }
                />
                <Input placeholder="Nome Responsavel" />
                <Input placeholder={clientType === 'PJ' ? 'CNPJ' : 'CPF'} />
                <Input placeholder="Email" />
                <Input placeholder="Telefone" />
                <Input placeholder="Endereço" />
                <ButtonWrapper>
                    <Button title="Cadastrar" />
                </ButtonWrapper>
            </Content>
        </Container>
    );
}
