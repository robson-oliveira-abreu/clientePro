import React from 'react';
import { Container, TouchableClose, Button, Text, Content } from './styles';

import auth from '@react-native-firebase/auth';

interface ModalProps {
    handleClose: () => void;
}

export function OptionsHomeModal({ handleClose }: ModalProps) {
    const signout = () => {
        auth().signOut();
    };
    return (
        <Container>
            <TouchableClose onPress={handleClose} />
            <Content>
                <Button>
                    <Text>Configurações</Text>
                </Button>
                <Button>
                    <Text>Perfil</Text>
                </Button>
                <Button onPress={signout}>
                    <Text>Sair</Text>
                </Button>
            </Content>
        </Container>
    );
}
