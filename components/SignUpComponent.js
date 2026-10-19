import { useState } from "react";
import { Text, View } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../database/firebase";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fejl, setFejl] = useState("");

    const handleSignup = async () => {
        if (password.length < 6) {
            setFejl("Kodeordet skal være mindst 6 tegn.");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setFejl("Der findes allerede en bruger med den e-mail.");
            } else if (error.code === "auth/invalid-email") {
                setFejl("E-mailen er ikke gyldig.");
            } else {
                setFejl("Kunne ikke oprette bruger. Prøv igen.");
            }
        }
    };

    return (
        <View style={GlobalStyle.authBoks}>
            <Text style={GlobalStyle.overskrift}>Opret bruger</Text>
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
                placeholder="Mindst 6 tegn"
                secureTextEntry
            />

            {fejl !== "" && <Text style={GlobalStyle.fejl}>{fejl}</Text>}

            <ButtonComponent titel="Opret bruger" type="primary" onPress={handleSignup} />
        </View>
    );
}
