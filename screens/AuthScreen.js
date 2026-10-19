import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Login from "../components/LogInComponent";
import Signup from "../components/SignUpComponent";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function AuthScreen() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <View style={GlobalStyle.forsideContainer}>
            <Text style={GlobalStyle.forsideTitel}>ReStock</Text>
            <Text style={GlobalStyle.forsideSlogan}>
                Køb og sælg overskydende byggematerialer.
            </Text>

            {isLogin ? <Login /> : <Signup />}

            <Pressable onPress={() => setIsLogin((prev) => !prev)}>
                <Text style={GlobalStyle.skiftLink}>
                    {isLogin ? "Har du ikke en konto? Opret en" : "Har du en konto? Log ind"}
                </Text>
            </Pressable>
        </View>
    );
}
