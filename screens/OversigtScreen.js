import { FlatList, Text, View } from "react-native";
import OpslagCard from "../components/OpslagCard";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function OversigtScreen({ opslag }) {
    return (
        <View style={GlobalStyle.container}>
            <Text style={GlobalStyle.overskrift}>Materialer til salg</Text>
            <Text style={GlobalStyle.underOverskrift}>{opslag.length} opslag i nærheden</Text>

            <View style={GlobalStyle.listeContainer}>
                <FlatList
                    data={opslag}
                    renderItem={({ item }) => (
                        <OpslagCard
                            titel={item.titel}
                            materiale={item.materiale}
                            pris={item.pris}
                            sted={item.sted}
                            saelger={item.saelger}
                            billede={item.billede}
                        />
                    )}
                />
            </View>
        </View>
    );
}
