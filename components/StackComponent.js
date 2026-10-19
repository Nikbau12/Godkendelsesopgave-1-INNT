import { createStackNavigator } from "@react-navigation/stack";
import OpretOpslagScreen from "../screens/OpretOpslagScreen";
import KameraScreen from "../screens/StackScreens/KameraScreen";

const Stack = createStackNavigator();

// Opret opslag og kameraet ligger i samme stack, så billedet kan sendes tilbage
export default function StackComponent() {
    return (
        <Stack.Navigator initialRouteName="Opret" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Opret" component={OpretOpslagScreen} />
            <Stack.Screen name="Kamera" component={KameraScreen} />
        </Stack.Navigator>
    );
}
