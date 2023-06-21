import firestore from "@react-native-firebase/firestore";
import { Bill } from "../../types/Bill";

export function listenBills(clientId: string, callback: (docs: Bill[]) => void) {
    return firestore()
        .collection('bills')
        .where('clientId', '==', clientId)
        .onSnapshot(documentSnapshot => {
            const newBills = documentSnapshot.docs.map(doc => doc.data()) as Bill[];
            callback(newBills)

        });
}