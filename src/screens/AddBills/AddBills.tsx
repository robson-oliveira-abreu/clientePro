import React from 'react';

import { useForm } from 'react-hook-form';
import { useTheme } from 'styled-components/native';

import { BackButton } from '../../components/BackButton/BackButton';
import { Button } from '../../components/Button/button';
import DatePicker from 'react-native-date-picker';
import { format } from 'date-fns-tz';
import { useAddBillsScreen } from './useAddBillsScreen';
import { AddBillNavigationProps } from './types/addBillNavigationProps';
import { InputForm } from '../../components/InputForm/InputForm';
import * as S from './styles';

export function AddBills({ route }: AddBillNavigationProps) {
    const { client } = route.params;
    const { control, handleSubmit } = useForm();
    const theme = useTheme();
    const { onSubmit, handleBack, open, setOpen, date, zonedDate, setDate } =
        useAddBillsScreen({ client });

    return (
        <S.Container>
            <S.Header>
                <BackButton size={30} onPress={handleBack} />
                <S.Title>Adicionar Conta</S.Title>
            </S.Header>
            <S.Content>
                <InputForm
                    name="description"
                    placeholder="Descrição"
                    control={control}
                />
                <InputForm
                    name="category"
                    placeholder="Categoria"
                    control={control}
                />
                <S.DateButton onPress={() => setOpen(true)}>
                    <S.ButtonTitle>
                        {date
                            ? format(zonedDate, 'dd/MM/yyyy', {
                                  timeZone: 'America/Sao_Paulo',
                              })
                            : 'Data de Vencimento'}
                    </S.ButtonTitle>
                </S.DateButton>
                <DatePicker
                    modal
                    mode="date"
                    locale="pt-BR"
                    theme="dark"
                    confirmText="Confirmar"
                    cancelText="Cancelar"
                    open={open}
                    date={date}
                    title="Selecionar data"
                    textColor={theme.colors.main}
                    onConfirm={date => {
                        setOpen(false);
                        setDate(date);
                    }}
                    onCancel={() => {
                        setOpen(false);
                    }}
                />
                <InputForm
                    name="amount"
                    placeholder="Valor"
                    control={control}
                    keyboardType="numeric"
                />
                <S.ButtonWrapper>
                    <Button
                        title="Adicionar"
                        onPress={handleSubmit(onSubmit)}
                    />
                </S.ButtonWrapper>
            </S.Content>
        </S.Container>
    );
}
