import React, { useState } from 'react';
import { Alert } from 'react-native';
import { AvatarLogo } from '../../components/AvatarLogo/AvatarLogo';
import { Button } from '../../components/Button/button';
import { Input } from '../../components/Input/Input';

import { Container, Header, Form, Footer } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackAuthParamList } from '../../routes/auth.stack.routes';
import { useAuth } from '../../hooks/useAuth';
import { InputPassword } from '../../components/InputPassword/InputPassword';

type SigninScreenProps = NativeStackScreenProps<
    RootStackAuthParamList,
    'Signin'
>;

export function Signin({ navigation }: SigninScreenProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useAuth();

    const handleSignin = () => {
        if (!email || !password) {
            Alert.alert('Login', 'Preencha todos os campos.');
            return;
        }

        if (!email.includes('@') || email.length < 8 || password.length < 6) {
            Alert.alert('Login', 'Email e/ou senha validos.');
            return;
        }

        auth.signin(email, password);
    };

    return (
        <Container>
            <Header>
                <AvatarLogo />
            </Header>
            <Form>
                <Input
                    placeholder="Email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                <InputPassword
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                />
            </Form>
            <Footer>
                <Button
                    title="Entrar"
                    transparent={false}
                    onPress={handleSignin}
                />
                <Button
                    title="Cadastrar"
                    transparent={true}
                    onPress={() => navigation.navigate('Signup')}
                />
            </Footer>
        </Container>
    );
}
