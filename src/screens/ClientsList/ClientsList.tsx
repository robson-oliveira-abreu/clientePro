import React, { useContext, useEffect, useState } from 'react';
import firestore, {
    FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import { AddButton } from '../../components/AddButton/AddButton';
import { InputSearch } from '../../components/InputSearch/InputSearch';
import {
    Container,
    Header,
    ContentList,
    CardCLient,
    CardCLientTitle,
    Title,
} from './styles';

import { AuthContext } from '../../context/AuthContext/AuthContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootTabParamList } from '../../routes/app.tab.routes';
import { isEqual } from 'lodash';
import { CompanyContext } from '../../context/CompanyContext/CompanyContext';

type ClientListProps = NativeStackScreenProps<
    RootTabParamList,
    'Clients',
    undefined
>;

export function ClientsList({ navigation }: ClientListProps) {
    const [clients, setClients] = useState<
        FirebaseFirestoreTypes.DocumentData[] | null
    >(null);
    const [filterValue, setFilterValue] = useState('');
    const {company} = useContext(CompanyContext);

    const { user } = useContext(AuthContext);

    const filteredClints: FirebaseFirestoreTypes.DocumentData[] =
        clients && clients?.length > 0
            ? clients?.filter(
                  client =>
                      client &&
                      client?.name
                          ?.toLowerCase()
                          .includes(filterValue.toLowerCase()),
              )
            : [];

    useEffect(() => {
        const fetchClients = () => {
            if (clients !== null || !company?.id) {
                return;
            }

            firestore()
                .collection('companies')
                .doc(company.id)
                .collection('clients')
                .onSnapshot(documentSnapshot => {
                    const newClients = documentSnapshot.docs.map(doc =>
                        doc.data(),
                    );
                    if (!isEqual(newClients, clients)) {
                        setClients(newClients);
                    }
                });
        };
        fetchClients();
    }, [clients, user]);

    return (
        <Container>
            <Header>
                <InputSearch
                    onChangeText={setFilterValue}
                    value={filterValue}
                />
            </Header>
            <Title>Clientes</Title>
            <ContentList
                data={filterValue ? filteredClints : clients}
                renderItem={({ item }: { item: any }) => (
                    <CardCLient
                        key={item.id}
                        onPress={() =>
                            navigation?.navigate('Client', { client: item })
                        }
                    >
                        <CardCLientTitle>{item.name}</CardCLientTitle>
                    </CardCLient>
                )}
                keyExtractor={(item: any) => item.document}
            />
            <AddButton onPress={() => navigation?.navigate('AddClient')} />
        </Container>
    );
}
