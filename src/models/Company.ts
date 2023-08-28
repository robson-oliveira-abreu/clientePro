import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export type Company = FirebaseFirestoreTypes.DocumentData & {
    name?: string;
    owner?: string;
    id?: string;
    photo?: string;
}