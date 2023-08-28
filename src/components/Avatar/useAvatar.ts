import { useEffect, useState } from 'react';
import { ImageSourcePropType } from 'react-native';
import { UseAvatarProps } from './types/useAvatarProps';

const defaultImage = require('../../assets/AppLogo.png');

export const useAvatar = ({ source }: UseAvatarProps) => {
    const [imagePath, setImagePath] =
        useState<ImageSourcePropType>(defaultImage);

    useEffect(() => {
        if (source.length > 0) {
            setImagePath({ uri: source });
        }
    }, [source]);

    return {
        imagePath,

    }
}