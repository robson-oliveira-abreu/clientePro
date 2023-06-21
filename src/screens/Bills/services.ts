import firestore from "@react-native-firebase/firestore";
import { Bill } from "../../types/Bill";


export function listenUnPaidBills(callback: (bills: Bill[]) => void) {
    const subscriber = firestore()
        .collection('bills')
        .where('paid', '==', false)
        .onSnapshot((data) => {
            const parsedData = data.docs.map(doc => doc.data()) as Bill[];
            callback(parsedData);
        })

    return subscriber
}