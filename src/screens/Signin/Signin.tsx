import React from 'react';
import { AvatarLogo } from '../../components/AvatarLogo/AvatarLogo';
import { Button } from '../../components/Button/button';
import { Input } from '../../components/Input/Input';

import { Container, Header, Form, Footer } from './styles';
import { InputPassword } from '../../components/InputPassword/InputPassword';
import { SigninProps } from './types/signinProps';
import { useSigninScreen } from './useSigninScreen';

export function Signin({ navigation }: SigninProps) {
    const { email, password, setEmail, setPassword, handleSignin } =
        useSigninScreen();

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
