import { useState } from "react";
import { Alert } from "react-native";
import { signin } from "../../services/auth/signin";

export function useSigninScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignin = () => {
        if (!email || !password) {
            Alert.alert('Login', 'Preencha todos os campos.');
            return;
        }

        if (!email.includes('@') || email.length < 8 || password.length < 6) {
            Alert.alert('Login', 'Email e/ou senha validos.');
            return;
        }

        signin(email, password);
    };

    return {
        email,
        password,
        setEmail,
        setPassword,
        handleSignin
    }
}