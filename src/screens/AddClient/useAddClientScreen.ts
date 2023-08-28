import { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { Client, ClientTypes } from '../../models/Client';
import { getClient } from '../../services/client/getClient';
import { createClient } from '../../services/client/createClient';

export function useAddClientScreen() {
    const [clientType, setCLientType] = useState<ClientTypes>(ClientTypes.PJ);
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
            await createClient(user?.uid!, newClient)
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