import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Alert } from "react-native";

export function useSignupScreen() {
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


    return {
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        handleSignup
    }
}