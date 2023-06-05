import React, { useState, useContext } from 'react';
import { useForm, useController, FieldValues, Control } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import { BackButton } from '../../components/BackButton/BackButton';
import { Button } from '../../components/Button/button';
import { Input } from '../../components/Input/Input';
import {
    Container,
    Header,
    Content,
    SelectType,
    SelectButton,
    TextSelect,
    ButtonWrapper,
} from './styles';
import { AuthContext } from '../../context/AuthContext/AuthContext';

interface InputFormPops {
    placeHolder: string;
    name: string;
    control: Control<FieldValues, any> | undefined;
    keyboardType?: 'numeric' | 'email-address' | 'default';
}

const InputForm = ({
    placeHolder,
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
            placeholder={placeHolder}
            onChangeText={field.onChange}
            keyboardType={keyboardType}
        />
    );
};

export function AddClient() {
    const [clientType, setCLientType] = useState<'PJ' | 'PF'>('PJ');
    const navigation = useNavigation();
    const { control, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);

    const onSubmit = (data: any) => {
        const newClient = {
            ...data,
            clientType,
        };
        let docExists = false;

        firestore()
            .collection('companies')
            .doc(user?.uid)
            .collection('clients')
            .doc(newClient.document)
            .get()
            .then(doc => {
                if (doc.exists) {
                    docExists = true;
                }
            });

        if (!docExists) {
            firestore()
                .collection('companies')
                .doc(user?.uid)
                .collection('clients')
                .add(newClient)
                .then(docRef => {
                    docRef.update({ id: docRef.id });
                    navigation.goBack();
                });
        }
    };

    return (
        <Container>
            <Header>
                <BackButton size={30} onPress={() => navigation.goBack()} />
            </Header>
            <Content>
                <SelectType>
                    <SelectButton
                        isActive={clientType === 'PJ'}
                        onPress={() => {
                            setCLientType('PJ');
                        }}
                    >
                        <TextSelect>PJ</TextSelect>
                    </SelectButton>
                    <SelectButton
                        isActive={clientType === 'PF'}
                        onPress={() => {
                            setCLientType('PF');
                        }}
                    >
                        <TextSelect>Pessoa Fisica</TextSelect>
                    </SelectButton>
                </SelectType>
                <InputForm
                    name="name"
                    placeHolder={
                        clientType === 'PJ' ? 'Nome Fantasia' : 'Nome Cliente'
                    }
                    control={control}
                />
                <InputForm
                    name="responsible"
                    placeHolder="Nome Responsavel"
                    control={control}
                />
                <InputForm
                    name="document"
                    placeHolder={clientType === 'PJ' ? 'CNPJ' : 'CPF'}
                    control={control}
                    keyboardType="numeric"
                />
                <InputForm
                    name="email"
                    placeHolder="Email"
                    control={control}
                    keyboardType="email-address"
                />
                <InputForm
                    name="phone"
                    placeHolder="Telefone"
                    control={control}
                    keyboardType="numeric"
                />
                <InputForm
                    name="address"
                    placeHolder="Endereço"
                    control={control}
                />
                <ButtonWrapper>
                    <Button
                        title="Cadastrar"
                        onPress={handleSubmit(onSubmit)}
                    />
                </ButtonWrapper>
            </Content>
        </Container>
    );
}
