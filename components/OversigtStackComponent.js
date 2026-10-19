import { createStackNavigator } from "@react-navigation/stack";
import OversigtScreen from "../screens/OversigtScreen";
import OpslagDetaljeScreen from "../screens/StackScreens/OpslagDetaljeScreen";
import RedigerOpslagScreen from "../screens/StackScreens/RedigerOpslagScreen";
import KameraScreen from "../screens/StackScreens/KameraScreen";

const Stack = createStackNavigator();

// Oversigten har sin egen stack, så man kan trykke sig ind på et opslag og redigere det
export default function OversigtStackComponent() {
    return (
        <Stack.Navigator initialRouteName="OversigtListe" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="OversigtListe" component={OversigtScreen} />
            <Stack.Screen name="OpslagDetalje" component={OpslagDetaljeScreen} />
            <Stack.Screen name="Rediger" component={RedigerOpslagScreen} />
            <Stack.Screen name="Kamera" component={KameraScreen} />
        </Stack.Navigator>
    );
}
