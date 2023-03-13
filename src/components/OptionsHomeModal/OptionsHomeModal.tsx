import React from 'react';
import {Container, TouchableClose, Button, Text, Content} from './styles';

interface ModalProps {
    handleClose: () => void;
}

export function OptionsHomeModal({handleClose}: ModalProps) {
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
            </Content>
        </Container>
    );
}
