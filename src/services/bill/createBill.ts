import firestore from "@react-native-firebase/firestore";
import { Bill } from "../../models/Bill";


export const createBill = async (newBill: Bill): Promise<void> => {
    return firestore()
        .collection('bills')
        .add(newBill)
        .then(docRef => {
            docRef.update({ id: docRef.id });
        });
}