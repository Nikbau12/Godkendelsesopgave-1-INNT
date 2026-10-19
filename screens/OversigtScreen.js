import { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { ref, onValue } from "firebase/database";
import { rtdb } from "../database/firebase";
import OpslagCard from "../components/OpslagCard";
import ButtonComponent from "../components/ButtonComponent";
import { KATEGORIER, OPSLAG } from "../data/const";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function OversigtScreen() {
    const [opslag, setOpslag] = useState([]);
    const [valgtKategori, setValgtKategori] = useState("Alle");

    // Henter opslag fra databasen og lytter efter nye
    useEffect(() => {
        const opslagRef = ref(rtdb, "Opslag");
        const unsubscribe = onValue(opslagRef, (snap) => {
            const data = snap.val();
            if (data) {
                const liste = Object.keys(data).map((id) => ({ id: id, ...data[id] }));
                setOpslag(liste.reverse()); // nyeste først
            } else {
                setOpslag([]);
            }
        });
        return unsubscribe;
    }, []);

    // Eksempel-opslagene vises under dem fra databasen
    const alleOpslag = [...opslag, ...OPSLAG];
    const filtreret =
        valgtKategori === "Alle" ? alleOpslag : alleOpslag.filter((o) => o.kategori === valgtKategori);

    const filtre = ["Alle", ...KATEGORIER.map((k) => k.navn)];

    return (
        <View style={GlobalStyle.container}>
            <Text style={GlobalStyle.overskrift}>Materialer til salg</Text>
            <Text style={GlobalStyle.underOverskrift}>{filtreret.length} opslag i nærheden</Text>

            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={GlobalStyle.filterRaekke}>
                    {filtre.map((navn, key) => (
                        <View key={key} style={GlobalStyle.kategoriKnap}>
                            <ButtonComponent
                                titel={navn}
                                type={valgtKategori === navn ? "primary" : "secondary"}
                                onPress={() => setValgtKategori(navn)}
                            />
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View style={GlobalStyle.listeContainer}>
                <FlatList
                    data={filtreret}
                    renderItem={({ item }) => (
                        <OpslagCard
                            titel={item.titel}
                            materiale={item.materiale}
                            pris={item.pris}
                            sted={item.sted}
                            saelger={item.saelger}
                            kategori={item.kategori}
                            billede={item.billede}
                            dato={item.dato}
                        />
                    )}
                />
            </View>
        </View>
    );
}
