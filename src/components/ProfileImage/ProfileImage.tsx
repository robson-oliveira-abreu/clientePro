import React from 'react';
import {TouchableWithoutFeedbackProps} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import {Container, Image} from './styles';

const clientProLogo = require('../../assets/AppLogo.png');

interface ProfileImageProps extends TouchableWithoutFeedbackProps {
    size: number;
    profileImage: null | string;
    setProfileImage: (imageUri: string) => void;
}

export function ProfileImage({
    profileImage,
    setProfileImage,
    size,
    ...rest
}: ProfileImageProps) {
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

                    setProfileImage(images[0]?.uri);
                }
            },
        );
    };
    return (
        <Container {...rest} onPress={() => getImage()}>
            <Image
                source={profileImage ? {uri: profileImage} : clientProLogo}
                style={{
                    height: size,
                    width: size,
                    borderRadius: size / 2,
                }}
            />
        </Container>
    );
}
