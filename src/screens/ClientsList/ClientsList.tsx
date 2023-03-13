import React, {useState} from 'react';
import {AddButton} from '../../components/AddButton/AddButton';
import {InputSearch} from '../../components/InputSearch/InputSearch';
import {
    Container,
    Header,
    ContentList,
    CardCLient,
    CardCLientTitle,
} from './styles';

import {data} from '../../data';
import {useNavigation} from '@react-navigation/native';

interface Client {
    id: number;
    clientName: string;
    amount: number;
}
export function ClientsList() {
    const [clients, setClients] = useState<Client[]>(data);
    const [filterValue, setFilterValue] = useState('');
    const navigation = useNavigation();

    const filteredClints: Client[] = clients.filter(client =>
        client.clientName.toLowerCase().includes(filterValue.toLowerCase()),
    );

    if (false) {
        setClients(filteredClints);
    }

    return (
        <Container>
            <Header>
                <InputSearch
                    onChangeText={setFilterValue}
                    value={filterValue}
                />
            </Header>
            <ContentList
                data={filteredClints}
                renderItem={({item}: {item: any}) => (
                    <CardCLient
                        key={item.id}
                        onPress={() =>
                            navigation.navigate('Client', {
                                id: item.id,
                                name: item.clientName,
                            })
                        }>
                        <CardCLientTitle>{item.clientName}</CardCLientTitle>
                    </CardCLient>
                )}
                keyExtractor={(item: any) => item.id}
            />
            <AddButton onPress={() => navigation.navigate('AddClient')} />
        </Container>
    );
}
