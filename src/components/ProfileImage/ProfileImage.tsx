import React, {useEffect, useState} from 'react';
import {TouchableWithoutFeedbackProps} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Container, Image} from './styles';

const clientProLogo = require('../../assets/AppLogo.png');

interface ProfileImageProps extends TouchableWithoutFeedbackProps {
    size: number;
    seeOnly?: boolean;
}

export function ProfileImage({size, seeOnly, ...rest}: ProfileImageProps) {
    const [imageUrl, setImageUrl] = useState('');
    const getImage = async () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                quality: 0.2,
            },
            response => {
                const images = response.assets;

                if (Array.isArray(images) && images[0]?.uri) {
                    console.log(images[0]?.uri);

                    savePathImage(images[0]?.uri);
                    setImageUrl(images[0]?.uri);
                }
            },
        );
    };

    const savePathImage = async (imagePath: string) => {
        try {
            await AsyncStorage.setItem('clientPro@imagePath', imagePath);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        const fetchImage = async () => {
            const image = await AsyncStorage.getItem('clientPro@imagePath');
            if (image) {
                setImageUrl(image);
            }
        };
        fetchImage();
    }, []);

    return (
        <Container {...rest} onPress={() => !seeOnly && getImage()}>
            <Image
                source={imageUrl ? {uri: imageUrl} : clientProLogo}
                style={{
                    height: size,
                    width: size,
                    borderRadius: size / 2,
                }}
            />
        </Container>
    );
}
