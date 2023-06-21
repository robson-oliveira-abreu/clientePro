import firestore from "@react-native-firebase/firestore";
import { Client } from "../../types/Client";


export async function getClient(userUid: string, document: string) {
    return firestore()
        .collection('companies')
        .doc(userUid)
        .collection('clients')
        .where('document', '==', document)
        .get()
        .then(doc => {
            return doc.docs[0].data();
        });


}

export async function addClient(userUid: string, newClient: Client) {
    return firestore()
        .collection('companies')
        .doc(userUid)
        .collection('clients')
        .add(newClient)
        .then(docRef => {
            docRef.update({ id: docRef.id });
        });
}