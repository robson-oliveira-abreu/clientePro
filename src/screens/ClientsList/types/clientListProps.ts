import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootTabParamList } from "../../../routes/app.tab.routes";

export type ClientListProps = NativeStackScreenProps<
    RootTabParamList,
    'Clients',
    undefined
>;