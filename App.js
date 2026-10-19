import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./database/firebase";
import ForsideScreen from "./screens/ForsideScreen";
import OversigtStackComponent from "./components/OversigtStackComponent";
import AuthScreen from "./screens/AuthScreen";
import StackComponent from "./components/StackComponent";
import { GlobalStyle } from "./styles/GlobalStyle";

const Tab = createBottomTabNavigator();

export default function App() {
  const [bruger, setBruger] = useState(null);

  // Lytter efter om brugeren logger ind eller ud
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setBruger(currentUser);
    });
    return unsubscribe;
  }, []);

  // Ikke logget ind - vis login
  if (!bruger) {
    return <AuthScreen />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerTitle: "ReStock",
          headerTitleAlign: "left",
          headerStyle: GlobalStyle.header,
          headerTitleStyle: GlobalStyle.headerTitel,
          headerTintColor: "#fff",
          tabBarStyle: GlobalStyle.tabBar,
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#A5D6A7",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Forside") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Oversigt") {
              iconName = focused ? "list" : "list-outline";
            } else if (route.name === "Opret opslag") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Forside" component={ForsideScreen} />
        <Tab.Screen name="Oversigt" component={OversigtStackComponent} />
        <Tab.Screen name="Opret opslag" component={StackComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
