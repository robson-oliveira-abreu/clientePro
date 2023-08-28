import React from 'react';
import { useController } from 'react-hook-form';
import { Input } from '../Input/Input';
import { InputFormPops } from './types/inputFormPops';

export function InputForm({
    placeholder,
    name,
    control,
    keyboardType = 'default',
}: InputFormPops) {
    const { field } = useController({
        control,
        defaultValue: '',
        rules: {
            required: true,
        },
        name,
    });
    return (
        <Input
            value={field.value}
            placeholder={placeholder}
            onChangeText={field.onChange}
            keyboardType={keyboardType}
        />
    );
}
