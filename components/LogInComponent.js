import { useState } from "react";
import { Text, View } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../database/firebase";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fejl, setFejl] = useState("");

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setFejl("Login fejlede. Tjek e-mail og kodeord.");
        }
    };

    return (
        <View style={GlobalStyle.authBoks}>
            <Text style={GlobalStyle.overskrift}>Log ind</Text>
            <InputComponent
                label="E-mail"
                value={email}
                onChangeText={setEmail}
                placeholder="din@mail.dk"
                autoCapitalize="none"
            />
            <InputComponent
                label="Kodeord"
                value={password}
                onChangeText={setPassword}
                placeholder="Kodeord"
                secureTextEntry
            />

            {fejl !== "" && <Text style={GlobalStyle.fejl}>{fejl}</Text>}

            <ButtonComponent titel="Log ind" type="primary" onPress={handleLogin} />
        </View>
    );
}
