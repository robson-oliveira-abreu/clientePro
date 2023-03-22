import React, {useState} from 'react';
import {Button} from '../../components/Button/button';
import {Input} from '../../components/Input/Input';
import {ProfileImage} from '../../components/ProfileImage/ProfileImage';
import firestore from '@react-native-firebase/firestore';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {Container} from './styles';

interface CompanyDataProps {
    user: FirebaseAuthTypes.User;
    setCompany: (company: any) => void;
}
export function CompanyData({user, setCompany}: CompanyDataProps) {
    const [companyName, setCompanyName] = useState('');
    const [name, setName] = useState('');

    const handleSaveCompany = () => {
        if (!user.uid) {
            return;
        }
        firestore()
            .collection('company')
            .doc(user.uid)
            .set({
                name: companyName,
                owner: name,
            })
            .then(() => {
                firestore()
                    .collection('company')
                    .doc(user.uid)
                    .get()
                    .then(res => {
                        setCompany(() => {
                            const newState = res.data();
                            if (newState) {
                                return newState;
                            }
                        });
                    });
            });
    };

    return (
        <Container>
            <ProfileImage size={150} />
            <Input
                placeholder="Nome da Empresa"
                value={companyName}
                onChangeText={setCompanyName}
            />
            <Input placeholder="Nome" value={name} onChangeText={setName} />
            <Button
                title="Salvar"
                style={{marginTop: 40}}
                onPress={handleSaveCompany}
            />
        </Container>
    );
}
