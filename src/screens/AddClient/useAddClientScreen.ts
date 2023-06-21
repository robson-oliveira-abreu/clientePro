import { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { addClient, getClient } from './services';
import { Client } from '../../types/Client';

export function useAddClientScreen() {
    const [clientType, setCLientType] = useState<'PJ' | 'PF'>('PJ');
    const navigation = useNavigation();
    const { user } = useContext(AuthContext);

    function handleGoBack() {
        navigation.goBack()
    }

    const onSubmit = async (data: any) => {
        const newClient: Client = {
            ...data,
            clientType,
        };

        const docExists = await getClient(user?.uid!, newClient.document);

        if (!docExists) {
            await addClient(user?.uid!, newClient)
            handleGoBack();
        }
    };

    return {
        clientType,
        onSubmit,
        handleGoBack,
        setCLientType
    }

}