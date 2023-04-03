import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { useForm, useController, FieldValues, Control } from 'react-hook-form';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import { BackButton } from '../../components/BackButton/BackButton';
import { Button } from '../../components/Button/button';
import { Input } from '../../components/Input/Input';
import {
    Container,
    Header,
    Title,
    Content,
    ButtonWrapper,
    DateButton,
    ButtonTitle,
} from './styles';
import DatePicker from 'react-native-date-picker';
import { utcToZonedTime, format } from 'date-fns-tz';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/app.stack.routes';

interface InputFormPops extends TextInputProps {
    name: string;
    control: Control<FieldValues, any> | undefined;
}

const InputForm = ({
    placeholder,
    name,
    control,
    keyboardType = 'default',
}: InputFormPops) => {
    const { field } = useController({
        control,
        defaultValue: '',
        rules: {
            required: true,
        },
        name,
    });
    return (
        <Input
            value={field.value}
            placeholder={placeholder}
            onChangeText={field.onChange}
            keyboardType={keyboardType}
        />
    );
};

type AddBillScreenProps = NativeStackScreenProps<
    RootStackParamList,
    'AddBills'
>;

export function AddBills({ route }: AddBillScreenProps) {
    const { client } = route.params;

    const navigation = useNavigation();
    const { control, handleSubmit } = useForm();
    const [open, setOpen] = useState(false);

    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + 1);
    const [date, setDate] = useState(currentDate);
    const zonedDate = utcToZonedTime(date, 'America/Sao_Paulo');

    const theme = useTheme();

    const onSubmit = (data: any) => {
        if (client?.document) {
            const newBill = {
                userId: client?.document,
                ...data,
                expiration: date,
            };

            firestore()
                .collection('bills')
                .add(newBill)
                .then(() => {
                    navigation.goBack();
                });
        }
    };

    return (
        <Container>
            <Header>
                <BackButton size={30} onPress={() => navigation.goBack()} />
                <Title>Adicionar Conta</Title>
            </Header>
            <Content>
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
                <DateButton onPress={() => setOpen(true)}>
                    <ButtonTitle>
                        {date
                            ? format(zonedDate, 'dd/MM/yyyy', {
                                  timeZone: 'America/Sao_Paulo',
                              })
                            : 'Data de Vencimento'}
                    </ButtonTitle>
                </DateButton>
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
                <ButtonWrapper>
                    <Button
                        title="Adicionar"
                        onPress={handleSubmit(onSubmit)}
                    />
                </ButtonWrapper>
            </Content>
        </Container>
    );
}
