import { useContext } from 'react'
import storage from '@react-native-firebase/storage'
import { CompanyContext } from '../context/CompanyContext/CompanyContext'
import { Alert } from 'react-native'

type UploadImageProps = {
    imageUri: string
    imageName: string
}

export function useFirebaseImage() {
    const { company } = useContext(CompanyContext)

    const uploadImage = async ({ imageName, imageUri }: UploadImageProps) => {
        if(!company?.id || !imageName) {
            Alert.alert('Salvar imagem', 'Ocorreun ao salvar a imagem')
            return;
        }

        const reference = storage().ref(`${company?.id}/images/${imageName}`);

        try {
            const response = await fetch(imageUri);
            const blob = await response.blob();

            await reference.put(blob);

            const downloadURL = await reference.getDownloadURL();
            console.log('Image uploaded successfully. Download URL:', downloadURL);

            return downloadURL;
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }

    return {
        uploadImage,
    }
}