import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Client } from "../../../models/Client"
import { RootStackParamList } from "../../../routes/app.stack.routes"

export type UseClientScreenProps = {
    client: Client,
    navigation: NativeStackNavigationProp<RootStackParamList, "Client", undefined>
}