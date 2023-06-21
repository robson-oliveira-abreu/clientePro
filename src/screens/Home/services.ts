import firestore from '@react-native-firebase/firestore';
import { Bill } from '../../types/Bill';


export function listenBills(companyId: string, callback: (docs: Bill[]) => void) {
    return firestore()
        .collection('bills')
        .where('companyId', '==', companyId)
        .onSnapshot(data => {
            return callback(data.docs.map(doc => doc.data()) as Bill[]);
        });
}