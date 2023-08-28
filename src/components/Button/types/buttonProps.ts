import { TouchableOpacityProps } from "react-native";

export type ButtonProps = TouchableOpacityProps & {
    title: string;
    transparent?: boolean;
    isLoading?: boolean;
}