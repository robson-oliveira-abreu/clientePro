import firestore from "@react-native-firebase/firestore";
import { Bill } from "../../models/Bill";


export const listenUnPaidBillsByCompany = (companyId: string, callback: (bills: Bill[]) => void): () => void => {
    const subscriber = firestore()
        .collection('bills')
        .where('paid', '==', false)
        .where('companyId', '==', companyId)
        .onSnapshot((data) => {
            const parsedData = data.docs.map(doc => doc.data()) as Bill[];
            callback(parsedData);
        })

    return subscriber
}