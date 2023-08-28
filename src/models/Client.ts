import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export enum ClientTypes {
    PJ = 'PJ',
    PF = 'PF'
}

export type Client = FirebaseFirestoreTypes.DocumentData & {
    id: string;
    name: string;
    responsible: string;
    address: string;
    clientType: ClientTypes;
    document: string;
    email: string;
    phone: string;
}
