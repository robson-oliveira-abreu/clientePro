import { useState } from "react";
import { Alert } from "react-native";
import { signup } from "../../services/auth/signup";

export function useSignupScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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

        signup(email, password);
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