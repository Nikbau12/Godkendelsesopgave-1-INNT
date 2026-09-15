import { Pressable, Text } from "react-native";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function ButtonComponent({ titel, onPress, type }) {
    return (
        <Pressable
            style={({ pressed }) => [
                {
                    backgroundColor:
                        type === "primary"
                            ? (pressed ? GlobalStyle.primaryBtn.pressedColor : GlobalStyle.primaryBtn.defaultColor)
                            : (pressed ? GlobalStyle.secondaryBtn.pressedColor : GlobalStyle.secondaryBtn.defaultColor),
                },
                type === "primary" ? GlobalStyle.primaryBtn : GlobalStyle.secondaryBtn,
            ]}
            onPress={onPress}
        >
            <Text style={type === "primary" ? GlobalStyle.primaryBtnText : GlobalStyle.secondaryBtnText}>
                {titel}
            </Text>
        </Pressable>
    );
}
