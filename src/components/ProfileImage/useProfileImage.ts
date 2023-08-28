import { useEffect, useState, useContext } from "react";
import { ImagePickerResponse, launchImageLibrary } from "react-native-image-picker";
import { useFirebaseImage } from "../../hooks/useFirebaseImage";
import { CompanyContext } from "../../context/CompanyContext/CompanyContext";
import { updateCompany } from "../../services/company/updateCompany";

export const useProfileImage = () => {
    const [imageUrl, setImageUrl] = useState('');
    const { company, handleGetCompany } = useContext(CompanyContext);
    const { uploadImage } = useFirebaseImage();


    const launchImageCallback = async (response: ImagePickerResponse) => {
        const images = response.assets;

        if (!Array.isArray(images) || !images[0]?.uri) {
            return;
        }

        const imagePath = await uploadImage({ imageName: 'profileImage', imageUri: images[0]?.uri })

        if (!imagePath) {
            return;
        }

        savePathImage(imagePath);
        setImageUrl(imagePath);

    };

    const getImage = async () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                quality: 0.2,
            },
            launchImageCallback
        );
    };

    const savePathImage = async (imagePath: string) => {
        try {
            await updateCompany(company?.id!, { photo: imagePath });
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