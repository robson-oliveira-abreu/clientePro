import React, {useState} from 'react';
import {AvatarLogo} from '../../components/AvatarLogo/AvatarLogo';
import {Button} from '../../components/Button/button';
import {Input} from '../../components/Input/Input';

import {Container, Header, Form, Footer} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackAuthParamList} from '../../routes/auth.stack.routes';
import {useAuth} from '../../hooks/useAuth';

type SigninScreenProps = NativeStackScreenProps<
    RootStackAuthParamList,
    'Signin'
>;

export function Signin({navigation}: SigninScreenProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useAuth();

    const handleSignin = () => {
        if (password.length < 6) {
            return console.log('min 6 digits password');
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
                <Input
                    placeholder="Senha"
                    keyboardType="visible-password"
                    secureTextEntry={true}
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
