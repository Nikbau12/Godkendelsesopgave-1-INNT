import { Text, View } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function ForsideScreen({ navigation }) {
    return (
        <View style={GlobalStyle.forsideContainer}>
            <Text style={GlobalStyle.forsideTitel}>ReStock</Text>
            <Text style={GlobalStyle.forsideSlogan}>
                Giv dine overskydende byggematerialer et nyt liv.
            </Text>
            <Text style={GlobalStyle.forsideTekst}>
                Har du træbjælker, fliser eller gipsplader til overs efter et projekt?
                Slå dem op her, så andre kan bruge dem, i stedet for at de ender i containeren.
            </Text>

            <View style={GlobalStyle.forsideKnapper}>
                <ButtonComponent
                    titel="Se alle opslag"
                    type="primary"
                    onPress={() => navigation.navigate("Oversigt")}
                />
                <ButtonComponent
                    titel="Opret et opslag"
                    type="secondary"
                    onPress={() => navigation.navigate("Opret opslag")}
                />
            </View>
        </View>
    );
}
