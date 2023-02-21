import React from 'react';
import {AvatarLogo} from '../../components/AvatarLogo/AvatarLogo';
import {Button} from '../../components/Button/button';
import {Input} from '../../components/Input/Input';

import {Container, Header, Form, Footer} from './styles';

export function Signin() {
    return (
        <Container>
            <Header>
                <AvatarLogo />
            </Header>
            <Form>
                <Input placeholder="Email" keyboardType="email-address" />
                <Input placeholder="Senha" keyboardType="visible-password" />
            </Form>
            <Footer>
                <Button title="Entrar" transparent={false} />
                <Button title="Cadastrar" transparent={true} />
            </Footer>
        </Container>
    );
}
