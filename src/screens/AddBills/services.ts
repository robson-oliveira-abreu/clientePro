import firestore from "@react-native-firebase/firestore";
import { Bill } from "../../types/Bill";


export async function addBill(newBill: Bill) {
    return firestore()
        .collection('bills')
        .add(newBill)
        .then(docRef => {
            docRef.update({ id: docRef.id });
        });
}