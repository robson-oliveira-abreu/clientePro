import React from 'react';
import { Container, Image, ImageWrapper } from './styles';
import { useProfileImage } from './useProfileImage';
import { ProfileImageProps } from './types/profileImageProps';

const clientProLogo = require('../../assets/AppLogo.png');

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
