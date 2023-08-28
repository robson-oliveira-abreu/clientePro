import React from 'react';
import { Container, AvatarImage } from './styles';
import { AvatarProps } from './types/AvatarProps';
import { useAvatar } from './useAvatar';

export function Avatar({ source, size }: AvatarProps) {
    const { imagePath } = useAvatar({ source });

    return (
        <Container size={size}>
            <AvatarImage source={imagePath} />
        </Container>
    );
}
