import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootTabParamList } from "../../routes/app.tab.routes";

export type ClientListNavigationProps = NativeStackScreenProps<
    RootTabParamList,
    'Clients',
    undefined
>;