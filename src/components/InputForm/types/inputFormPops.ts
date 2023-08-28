import { TextInputProps } from 'react-native';
import { FieldValues, Control } from 'react-hook-form';

export type InputFormPops = TextInputProps & {
    name: string;
    control: Control<FieldValues, any> | undefined;
}
