import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackAuthParamList } from '../../routes/auth.stack.routes';

export type SignupScreenProps = NativeStackScreenProps<
    RootStackAuthParamList,
    'Signup'
>;