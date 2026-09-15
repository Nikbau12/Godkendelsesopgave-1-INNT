import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import InputComponent from "../components/InputComponent";
import BilledeComponent from "../components/BilledeComponent";
import { KATEGORIER } from "../data/const";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function OpretOpslagScreen({ navigation, tilfoejOpslag }) {
    const [titel, setTitel] = useState("");
    const [materiale, setMateriale] = useState("");
    const [pris, setPris] = useState("");
    const [sted, setSted] = useState("");
    const [kategori, setKategori] = useState(KATEGORIER[0]);
    const [fejl, setFejl] = useState("");

    const opretOpslag = () => {
        if (titel === "" || pris === "") {
            setFejl("Du skal mindst udfylde titel og pris.");
            return;
        }

        const nytOpslag = {
            id: Date.now().toString(),
            titel: titel,
            materiale: materiale,
            pris: pris,
            sted: sted,
            saelger: "Dit opslag",
            billede: kategori.billede,
        };

        tilfoejOpslag(nytOpslag);

        setTitel("");
        setMateriale("");
        setPris("");
        setSted("");
        setKategori(KATEGORIER[0]);
        setFejl("");

        navigation.navigate("Oversigt");
    };

    return (
        <ScrollView style={GlobalStyle.container}>
            <Text style={GlobalStyle.overskrift}>Opret opslag</Text>
            <Text style={GlobalStyle.underOverskrift}>
                Har du materialer til overs? Udfyld felterne, så kommer dit opslag i oversigten.
            </Text>

            <InputComponent
                label="Titel"
                value={titel}
                onChangeText={setTitel}
                placeholder="F.eks. Træbjælker, 12 stk."
            />
            <InputComponent
                label="Beskrivelse"
                value={materiale}
                onChangeText={setMateriale}
                placeholder="Type, mål og stand"
            />
            <InputComponent
                label="Pris"
                value={pris}
                onChangeText={setPris}
                placeholder="F.eks. 400 kr. eller Gratis"
            />
            <InputComponent
                label="Sted"
                value={sted}
                onChangeText={setSted}
                placeholder="F.eks. Frederiksberg"
            />

            <Text style={GlobalStyle.inpLabel}>Billede</Text>
            <View style={GlobalStyle.kategoriRaekke}>
                {KATEGORIER.map((k, key) => (
                    <View key={key} style={GlobalStyle.kategoriKnap}>
                        <ButtonComponent
                            titel={k.navn}
                            type={kategori.navn === k.navn ? "primary" : "secondary"}
                            onPress={() => setKategori(k)}
                        />
                    </View>
                ))}
            </View>
            <BilledeComponent url={kategori.billede} style={GlobalStyle.forhaandsvisning} />

            {fejl !== "" && <Text style={GlobalStyle.fejl}>{fejl}</Text>}

            <View style={GlobalStyle.knapContainer}>
                <ButtonComponent titel="Opret opslag" type="primary" onPress={opretOpslag} />
            </View>
        </ScrollView>
    );
}
