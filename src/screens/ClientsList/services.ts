import firestore from '@react-native-firebase/firestore';
import { Client } from '../../types/Client';

export function listenClients(companyId: string, callback: (newClients: Client[]) => void) {
    return firestore()
        .collection('companies')
        .doc(companyId)
        .collection('clients')
        .onSnapshot(documentSnapshot => {
            const newClients = documentSnapshot.docs.map(doc => doc.data()) as Client[];
            callback(newClients);
        });
}