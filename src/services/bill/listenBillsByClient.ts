import firestore from "@react-native-firebase/firestore";
import { Bill } from "../../models/Bill";

export const listenBills = (clientId: string, callback: (docs: Bill[]) => void): () => void => {
    return firestore()
        .collection('bills')
        .where('clientId', '==', clientId)
        .onSnapshot(documentSnapshot => {
            const newBills = documentSnapshot.docs.map(doc => doc.data()) as Bill[];
            callback(newBills)

        });
}