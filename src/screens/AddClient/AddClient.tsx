import React from 'react';
import { useForm } from 'react-hook-form';

import { BackButton } from '../../components/BackButton/BackButton';
import { Button } from '../../components/Button/button';
import { useAddClientScreen } from './useAddClientScreen';

import * as S from './styles';
import { InputForm } from '../../components/InputForm/InputForm';
import { ClientTypes } from '../../models/Client';

export function AddClient() {
    const { control, handleSubmit } = useForm();
    const { onSubmit, handleGoBack, clientType, setCLientType } =
        useAddClientScreen();

    return (
        <S.Container>
            <S.Header>
                <BackButton size={30} onPress={handleGoBack} />
            </S.Header>
            <S.Content>
                <S.SelectType>
                    <S.SelectButton
                        isActive={clientType === ClientTypes.PJ}
                        onPress={() => {
                            setCLientType(ClientTypes.PJ);
                        }}
                    >
                        <S.TextSelect>PJ</S.TextSelect>
                    </S.SelectButton>
                    <S.SelectButton
                        isActive={clientType === ClientTypes.PF}
                        onPress={() => {
                            setCLientType(ClientTypes.PF);
                        }}
                    >
                        <S.TextSelect>Pessoa Fisica</S.TextSelect>
                    </S.SelectButton>
                </S.SelectType>
                <InputForm
                    name="name"
                    placeholder={
                        clientType === ClientTypes.PJ ? 'Nome Fantasia' : 'Nome Cliente'
                    }
                    control={control}
                />
                <InputForm
                    name="responsible"
                    placeholder="Nome Responsavel"
                    control={control}
                />
                <InputForm
                    name="document"
                    placeholder={clientType === ClientTypes.PJ ? 'CNPJ' : 'CPF'}
                    control={control}
                    keyboardType="numeric"
                />
                <InputForm
                    name="email"
                    placeholder="Email"
                    control={control}
                    keyboardType="email-address"
                />
                <InputForm
                    name="phone"
                    placeholder="Telefone"
                    control={control}
                    keyboardType="numeric"
                />
                <InputForm
                    name="address"
                    placeholder="Endereço"
                    control={control}
                />
                <S.ButtonWrapper>
                    <Button
                        title="Cadastrar"
                        onPress={handleSubmit(onSubmit)}
                    />
                </S.ButtonWrapper>
            </S.Content>
        </S.Container>
    );
}
