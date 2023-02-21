import React from 'react';
import {Container, AvatarImage} from './styles';

interface AvatarProps {
    source: string;
    size: number;
}

export function Avatar({source, size}: AvatarProps) {
    return (
        <Container size={size}>
            <AvatarImage source={{uri: source}} />
        </Container>
    );
}
