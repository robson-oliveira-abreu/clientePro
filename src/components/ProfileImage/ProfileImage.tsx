import React from 'react';
import { Container, Image, ImageWrapper } from './styles';
import { useProfileImage } from './useProfileImage';
import { ProfileImageProps } from './types/profileImageProps';
import { globalStyles } from '../../styles/globalStyles';

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
                style={[
                    {
                        height: size,
                        width: size,
                        borderRadius: size / 2,
                        borderWidth,
                    },
                    globalStyles.shadow_lg,
                ]}
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
