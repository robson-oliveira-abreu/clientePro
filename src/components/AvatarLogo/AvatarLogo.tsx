import React from 'react';
import {Container, AvatarImage} from './styles';

export function AvatarLogo() {
    return (
        <Container>
            <AvatarImage source={require('../../assets/AppLogo.png')} />
        </Container>
    );
}
