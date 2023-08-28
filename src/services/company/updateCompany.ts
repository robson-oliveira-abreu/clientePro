import firestore from "@react-native-firebase/firestore";
import { Company } from "../../models/Company";

export const updateCompany = async (id: string, company: Company): Promise<void> => {
    await firestore().collection('companies').doc(id).update(company);
}