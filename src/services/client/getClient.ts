import firestore from "@react-native-firebase/firestore";
import { Client } from "../../models/Client";


export const getClient = async (userUid: string, document: string): Promise<Client | undefined> => {
    return firestore()
        .collection('companies')
        .doc(userUid)
        .collection('clients')
        .where('document', '==', document)
        .get()
        .then(doc => {
            return doc.docs[0]?.data() as Client | undefined;
        });


}
