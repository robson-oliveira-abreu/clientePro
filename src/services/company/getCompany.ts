import firestore from '@react-native-firebase/firestore';
import { Company } from '../../models/Company';

export const getCompany = async (id: string): Promise<Company> => {
    const company = await firestore()
        .collection('companies')
        .doc(id)
        .get();

    return company.data() as Company;
}