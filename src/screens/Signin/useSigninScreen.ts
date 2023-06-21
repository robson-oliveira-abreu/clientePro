import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Alert } from "react-native";

export function useSigninScreen() {
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

    return {
        email,
        password,
        setEmail,
        setPassword,
        handleSignin
    }
}