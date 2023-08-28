import { TouchableWithoutFeedbackProps } from "react-native";

export type ProfileImageProps = TouchableWithoutFeedbackProps & {
    size: number;
    borderWidth?: number;
    seeOnly?: boolean;
}