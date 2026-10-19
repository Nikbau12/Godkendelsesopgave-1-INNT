import { Text, TextInput, View } from "react-native";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function InputComponent({ label, value, onChangeText, placeholder, secureTextEntry, autoCapitalize }) {
    return (
        <View style={GlobalStyle.inputGruppe}>
            <Text style={GlobalStyle.inpLabel}>{label}</Text>
            <TextInput
                style={GlobalStyle.textInput}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                autoCapitalize={autoCapitalize}
            />
        </View>
    );
}
