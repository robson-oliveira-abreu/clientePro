import { useContext, useState } from 'react'
import { CompanyContext } from "../../context/CompanyContext/CompanyContext";
import { useNavigation } from '@react-navigation/native';
import { utcToZonedTime } from 'date-fns-tz';
import { Client } from '../../types/Client';
import { addBill } from './services';
import { Bill } from '../../types/Bill';

export function useAddBillsScreen({ client }: { client: Client }) {
    const { company } = useContext(CompanyContext);
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);

    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + 1);
    const [date, setDate] = useState(currentDate);
    const zonedDate = utcToZonedTime(date, 'America/Sao_Paulo');

    function handleBack() {
        navigation.goBack();
    }

    const onSubmit = (data: any) => {
        const amount = parseFloat(
            data?.amount.replace(/\./g, '').replace(',', '.'),
        );
        if (client?.document) {
            const newBill: Bill = {
                ...data,
                amount: amount,
                expiration: date,
                clientName: client?.name,
                clientId: client?.id,
                companyId: company?.id,
                paid: false,
            };

            addBill(newBill);
            handleBack();
        }
    };

    return {
        open,
        date,
        zonedDate,
        onSubmit,
        handleBack,
        setOpen,
        setDate,
    }
}