import React, { useEffect, useState } from 'react';
import { ImageSourcePropType } from 'react-native';
import { Container, AvatarImage } from './styles';
const defaultImage = require('../../assets/AppLogo.png');

interface AvatarProps {
    source: string;
    size: number;
}

export function Avatar({ source, size }: AvatarProps) {
    const [imagePath, setImagePath] =
        useState<ImageSourcePropType>(defaultImage);
    useEffect(() => {
        if (source.length > 0) {
            setImagePath({ uri: source });
        }
    }, [source]);
    return (
        <Container size={size}>
            <AvatarImage source={imagePath} />
        </Container>
    );
}
