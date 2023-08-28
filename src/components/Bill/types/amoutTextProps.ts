import { TextProps } from "react-native-svg";

export type AmountTextProps = TextProps &  {
    paid: boolean;
}