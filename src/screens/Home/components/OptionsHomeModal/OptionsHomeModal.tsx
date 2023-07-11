import React from 'react';
import { Container, Content, Button, Text } from './styles';
import { useOptionsHomeModal } from './useOptionsHomeModal';

export function OptionsHomeModal() {
    const { signOut } = useOptionsHomeModal();
    return (
        <Container>
            <Content>
                <Button>
                    <Text>Configurações</Text>
                </Button>
                <Button onPress={signOut}>
                    <Text>Sair</Text>
                </Button>
            </Content>
        </Container>
    );
}
