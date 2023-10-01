import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Client } from "../../../../../models/Client";
import { RootTabParamList } from "../../../../../routes/app.tab.routes";

export type ClientCardProps = {
    item: Client
    index: number
    navigation: NativeStackNavigationProp<RootTabParamList, "Clients", undefined>
}