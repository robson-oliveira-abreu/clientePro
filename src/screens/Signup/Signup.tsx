import React, { useState } from 'react';
import { AvatarLogo } from '../../components/AvatarLogo/AvatarLogo';
import { Button } from '../../components/Button/button';
import { Input } from '../../components/Input/Input';

import { Container, Header, Form, Footer } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackAuthParamList } from '../../routes/auth.stack.routes';
import { useAuth } from '../../hooks/useAuth';
import { Alert } from 'react-native';

type SignupScreenProps = NativeStackScreenProps<
    RootStackAuthParamList,
    'Signup'
>;

export function Signup({ navigation }: SignupScreenProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const auth = useAuth();

    async function handleSignup() {
        if (!email || !password || !confirmPassword) {
            Alert.alert('Cadastro', 'Preencha todos os campos.');
            return;
        }

        if (!email.includes('@') || password.length < 8) {
            Alert.alert('Cadastro', 'Insira um email valido.');
            return;
        }

        if (password.length < 6) {
            Alert.alert('Cadastro', 'Senhas devem conter 6 ou mais digitos.');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Cadastro', 'Senhas não estão iguais');
            return;
        }

        auth.signup(email, password);
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
                <Input
                    placeholder="Senha"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                <Input
                    placeholder="Confirmar Senha"
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
            </Form>
            <Footer>
                <Button
                    title="Cadastrar"
                    transparent={false}
                    onPress={handleSignup}
                />
                <Button
                    title="Entrar"
                    transparent={true}
                    onPress={() => navigation.navigate('Signin')}
                />
            </Footer>
        </Container>
    );
}
