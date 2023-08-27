import { useEffect, useState, useContext } from "react";
import { launchImageLibrary } from "react-native-image-picker";
import { useFirebaseImage } from "../../hooks/useFirebaseImage";
import firestore from '@react-native-firebase/firestore'
import { CompanyContext } from "../../context/CompanyContext/CompanyContext";

export function useProfileImage() {
    const [imageUrl, setImageUrl] = useState('');
    const { company, handleGetCompany } = useContext(CompanyContext);
    const { uploadImage } = useFirebaseImage();


    const getImage = async () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                quality: 0.2,
            },
            async response => {
                const images = response.assets;

                if (Array.isArray(images) && images[0]?.uri) {
                    const imagePath = await uploadImage({ imageName: 'profileImage', imageUri: images[0]?.uri })

                    if (imagePath) {
                        savePathImage(imagePath);
                        setImageUrl(imagePath);
                    }
                }
            },
        );
    };

    const savePathImage = async (imagePath: string) => {
        try {
            await firestore().collection('companies').doc(company?.id).update({ photo: imagePath });
            handleGetCompany();
        } catch (error) {
            console.log({ error });
        }
    };

    useEffect(() => {
        setImageUrl(company?.photo ?? '')
    }, [company?.photo]);

    return {
        imageUrl,
        getImage,
    }
}