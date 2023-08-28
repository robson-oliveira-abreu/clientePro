import firestore from "@react-native-firebase/firestore";
import { Client } from "../../models/Client";

export const createClient = async (userUid: string, newClient: Client): Promise<void> => {
    return firestore()
        .collection('companies')
        .doc(userUid)
        .collection('clients')
        .add(newClient)
        .then(docRef => {
            docRef.update({ id: docRef.id });
        });
}