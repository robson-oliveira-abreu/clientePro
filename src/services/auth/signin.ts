import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native';

export const signin = (email: string, password: string): void => {
    auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => {
            console.log(error);
            if (error.code === 'auth/user-not-found') {
                Alert.alert('Login', 'Usuario não encontrado.');
            }
            if (error.code === 'auth/wrong-password') {
                Alert.alert('Login', 'Email ou senha invalidos.');
            }
        });
}