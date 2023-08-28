import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native';

export const signup = (email: string, password: string): void => {
    auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => {
            console.log({ error });
            if (error.code === 'auth/email-already-in-use') {
                Alert.alert('Cadastro', 'Email já está em uso.');
            }
            if (error.code === 'auth/invalid-email') {
                Alert.alert('Cadastro', 'Email invalido.');
            }
        });
}