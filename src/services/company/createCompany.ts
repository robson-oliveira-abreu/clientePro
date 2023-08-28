import firestore from '@react-native-firebase/firestore';
import { Company } from '../../models/Company';

export const createCompany = (id: string, company: Company): Promise<void> => {
    return firestore().collection('companies').doc(id).set(company);
}