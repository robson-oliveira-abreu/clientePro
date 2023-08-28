import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export type Bill = FirebaseFirestoreTypes.DocumentData & {
    amount: number;
    category: string;
    clientId: string;
    clientName: string;
    companyId: string;
    description: string;
    expiration: string;
    id: string;
    paid: boolean;
}
