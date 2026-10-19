import { Text, View } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../database/firebase";
import ButtonComponent from "../components/ButtonComponent";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function ForsideScreen({ navigation }) {
    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Logout fejlede:", error.message);
        }
    };

    return (
        <View style={GlobalStyle.forsideContainer}>
            <Text style={GlobalStyle.forsideTitel}>ReStock</Text>
            <Text style={GlobalStyle.forsideSlogan}>
                Køb og sælg overskydende byggematerialer.
            </Text>
            <Text style={GlobalStyle.forsideTekst}>
                Mangler du materialer til dit projekt? Find billige træbjælker, fliser og gipsplader i nærheden.
                Har du selv noget til overs, kan du slå det op, i stedet for at det ender i containeren.
            </Text>

            <View style={GlobalStyle.forsideKnapper}>
                <ButtonComponent
                    titel="Find materialer"
                    type="primary"
                    onPress={() => navigation.navigate("Oversigt")}
                />
                <ButtonComponent
                    titel="Sælg materialer"
                    type="secondary"
                    onPress={() => navigation.navigate("Opret opslag")}
                />
            </View>

            <Text style={GlobalStyle.loggetInd}>Logget ind som {auth.currentUser?.email}</Text>
            <ButtonComponent titel="Log ud" type="secondary" onPress={handleLogout} />
        </View>
    );
}
