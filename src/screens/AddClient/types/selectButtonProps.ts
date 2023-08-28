import { TouchableOpacityProps } from "react-native";

export type SelectButtonProps = TouchableOpacityProps & {
    isActive: boolean;
}