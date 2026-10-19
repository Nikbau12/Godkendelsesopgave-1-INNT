import { Pressable, Text } from "react-native";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function ButtonComponent({ titel, onPress, type }) {
    // "fare" bruges til sletning, ellers primary/secondary som før
    const boks =
        type === "primary" ? GlobalStyle.primaryBtn : type === "fare" ? GlobalStyle.fareBtn : GlobalStyle.secondaryBtn;
    const tekst =
        type === "primary"
            ? GlobalStyle.primaryBtnText
            : type === "fare"
              ? GlobalStyle.fareBtnText
              : GlobalStyle.secondaryBtnText;

    return (
        <Pressable
            style={({ pressed }) => [
                { backgroundColor: pressed ? boks.pressedColor : boks.defaultColor },
                boks,
            ]}
            onPress={onPress}
        >
            <Text style={tekst}>{titel}</Text>
        </Pressable>
    );
}
