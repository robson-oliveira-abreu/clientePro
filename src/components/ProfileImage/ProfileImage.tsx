import React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';

import { Container, Image, ImageWrapper } from './styles';
import { useProfileImage } from './useProfileImage';

const clientProLogo = require('../../assets/AppLogo.png');

interface ProfileImageProps extends TouchableWithoutFeedbackProps {
    size: number;
    borderWidth?: number;
    seeOnly?: boolean;
}

export function ProfileImage({
    size,
    borderWidth = 1,
    seeOnly,
    ...rest
}: ProfileImageProps) {
    const { imageUrl, getImage } = useProfileImage();

    return (
        <Container {...rest} onPress={() => !seeOnly && getImage()}>
            <ImageWrapper
                style={{
                    height: size,
                    width: size,
                    borderRadius: size / 2,
                    borderWidth,
                }}
            >
                <Image
                    source={imageUrl ? { uri: imageUrl } : clientProLogo}
                    style={{
                        height: size,
                        width: size,
                    }}
                />
            </ImageWrapper>
        </Container>
    );
}
