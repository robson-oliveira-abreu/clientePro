import firestore, { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

type IListenBilss = (data: FirebaseFirestoreTypes.DocumentData[]) => void


export function listenUnPaidBills(retunData: IListenBilss) {
    const subscriber = firestore()
        .collection('bills')
        .where('paid', '==', false)
        .onSnapshot((data) => {
            const parsedData = data.docs.map(doc => doc.data());
            retunData(parsedData);
        })

    return subscriber
}