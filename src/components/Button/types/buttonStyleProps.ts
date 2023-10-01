import { TouchableOpacityProps, TextProps } from 'react-native';

export type ButtonStyleProps = TouchableOpacityProps & {
    transparent?: boolean;
}

export type TextButtonProps = TextProps & {
    transparentButton?: boolean;
}