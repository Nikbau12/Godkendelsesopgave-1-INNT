import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import ForsideScreen from "./screens/ForsideScreen";
import OversigtScreen from "./screens/OversigtScreen";
import OpretOpslagScreen from "./screens/OpretOpslagScreen";
import { OPSLAG } from "./data/const";
import { GlobalStyle } from "./styles/GlobalStyle";

const Tab = createBottomTabNavigator();

export default function App() {
  const [opslag, setOpslag] = useState(OPSLAG);

  const tilfoejOpslag = (nytOpslag) => {
    setOpslag([nytOpslag, ...opslag]);
  };

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

        <Tab.Screen name="Oversigt">
          {(props) => <OversigtScreen {...props} opslag={opslag} />}
        </Tab.Screen>

        <Tab.Screen name="Opret opslag">
          {(props) => <OpretOpslagScreen {...props} tilfoejOpslag={tilfoejOpslag} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
