import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ref, push } from "firebase/database";
import { auth, rtdb } from "../database/firebase";
import ButtonComponent from "../components/ButtonComponent";
import InputComponent from "../components/InputComponent";
import BilledeComponent from "../components/BilledeComponent";
import { KATEGORIER } from "../data/const";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function OpretOpslagScreen({ navigation, route }) {
    const [titel, setTitel] = useState("");
    const [materiale, setMateriale] = useState("");
    const [pris, setPris] = useState("");
    const [sted, setSted] = useState("");
    const [kategori, setKategori] = useState(KATEGORIER[0]);
    const [billede, setBillede] = useState("");
    const [fejl, setFejl] = useState("");

    // Billede taget med kameraet kommer tilbage som parameter
    useEffect(() => {
        if (route.params?.billede) {
            setBillede(route.params.billede);
        }
    }, [route.params?.billede]);

    const vaelgBillede = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.2,
            base64: true,
        });

        if (!result.canceled) {
            const valgt = result.assets[0];
            setBillede("data:image/jpeg;base64," + valgt.base64);
        }
    };

    const opretOpslag = async () => {
        if (titel === "" || pris === "") {
            setFejl("Du skal mindst udfylde titel og pris.");
            return;
        }

        const idag = new Date();

        const nytOpslag = {
            titel: titel,
            materiale: materiale,
            pris: pris,
            sted: sted,
            kategori: kategori.navn,
            billede: billede,
            saelger: auth.currentUser?.email,
            dato: idag.getDate() + "." + (idag.getMonth() + 1) + "." + idag.getFullYear(),
        };

        try {
            await push(ref(rtdb, "/Opslag/"), nytOpslag);
        } catch (e) {
            setFejl(e?.message || "Noget gik galt.");
            return;
        }

        setTitel("");
        setMateriale("");
        setPris("");
        setSted("");
        setKategori(KATEGORIER[0]);
        setBillede("");
        setFejl("");
        navigation.setParams({ billede: undefined });

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

            <Text style={GlobalStyle.inpLabel}>Kategori</Text>
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

            <Text style={GlobalStyle.inpLabel}>Billede</Text>
            <View style={GlobalStyle.billedKnapper}>
                <View style={GlobalStyle.billedKnap}>
                    <ButtonComponent titel="Tag billede" type="secondary" onPress={() => navigation.navigate("Kamera")} />
                </View>
                <View style={GlobalStyle.billedKnap}>
                    <ButtonComponent titel="Vælg fra galleri" type="secondary" onPress={vaelgBillede} />
                </View>
            </View>
            {/* Uden eget billede vises kategoriens standardbillede */}
            <BilledeComponent
                url={billede !== "" ? { uri: billede } : kategori.billede}
                style={GlobalStyle.forhaandsvisning}
            />
            {billede === "" && (
                <Text style={GlobalStyle.billedTekst}>Intet billede valgt - kategoriens billede bruges.</Text>
            )}

            {fejl !== "" && <Text style={GlobalStyle.fejl}>{fejl}</Text>}

            <View style={GlobalStyle.knapContainer}>
                <ButtonComponent titel="Opret opslag" type="primary" onPress={opretOpslag} />
            </View>
        </ScrollView>
    );
}
