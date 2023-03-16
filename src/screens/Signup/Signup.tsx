import React, {useState} from 'react';
import {AvatarLogo} from '../../components/AvatarLogo/AvatarLogo';
import {Button} from '../../components/Button/button';
import {Input} from '../../components/Input/Input';

import auth from '@react-native-firebase/auth';

import {Container, Header, Form, Footer} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackAuthParamList} from '../../routes/auth.stack.routes';

type SignupScreenProps = NativeStackScreenProps<
    RootStackAuthParamList,
    'Signup'
>;

export function Signup({navigation}: SignupScreenProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signup = () => {
        if (password.length < 6) {
            return console.log('min 6 digits password');
        }
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                console.log(userCredentials);
                if (userCredentials?.user?.uid) {
                    navigation.navigate('Signin');
                }
            })
            .catch(error => {
                console.log({error});
                if (error.code === 'auth/email-already-in-use') {
                    console.log('email já existe');
                }
                if (error.code === 'auth/invalid-email') {
                    console.log('email invalido');
                }
            });
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
                    title="Cadastrar"
                    transparent={false}
                    onPress={signup}
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
