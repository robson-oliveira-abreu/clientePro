import React from 'react';
import { AvatarLogo } from '../../components/AvatarLogo/AvatarLogo';
import { Button } from '../../components/Button/button';
import { Input } from '../../components/Input/Input';

import { Container, Header, Form, Footer } from './styles';

import { SignupProps } from './types/signupProps';
import { useSignupScreen } from './useSignupScreen';

export function Signup({ navigation }: SignupProps) {
    const {
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        handleSignup
    } = useSignupScreen();
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
