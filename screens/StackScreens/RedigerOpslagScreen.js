import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ref, update } from "firebase/database";
import { rtdb } from "../../database/firebase";
import ButtonComponent from "../../components/ButtonComponent";
import InputComponent from "../../components/InputComponent";
import BilledeComponent from "../../components/BilledeComponent";
import { KATEGORIER } from "../../data/const";
import { GlobalStyle } from "../../styles/GlobalStyle";

export default function RedigerOpslagScreen({ navigation, route }) {
    const id = route.params.id;
    const original = route.params.opslag;

    // Felterne starter med det, opslaget allerede indeholder
    const [titel, setTitel] = useState(original.titel || "");
    const [materiale, setMateriale] = useState(original.materiale || "");
    const [pris, setPris] = useState(original.pris || "");
    const [sted, setSted] = useState(original.sted || "");
    const [kategori, setKategori] = useState(original.kategori || KATEGORIER[0]);
    const [billede, setBillede] = useState(original.billede || "");
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

    const gemAendringer = async () => {
        if (titel === "" || pris === "") {
            setFejl("Du skal mindst udfylde titel og pris.");
            return;
        }

        try {
            // update rører kun de felter der sendes med - saelger og dato bevares
            await update(ref(rtdb, "/Opslag/" + id), {
                titel: titel,
                materiale: materiale,
                pris: pris,
                sted: sted,
                kategori: kategori,
                billede: billede,
            });
        } catch (e) {
            setFejl(e?.message || "Noget gik galt.");
            return;
        }

        navigation.goBack();
    };

    return (
        <ScrollView style={GlobalStyle.container}>
            <Text style={GlobalStyle.overskrift}>Rediger opslag</Text>
            <Text style={GlobalStyle.underOverskrift}>Ret felterne og gem, så opdateres opslaget i oversigten.</Text>

            <InputComponent label="Titel" value={titel} onChangeText={setTitel} placeholder="F.eks. Træbjælker, 12 stk." />
            <InputComponent
                label="Beskrivelse"
                value={materiale}
                onChangeText={setMateriale}
                placeholder="Type, mål og stand"
            />
            <InputComponent label="Pris" value={pris} onChangeText={setPris} placeholder="F.eks. 400 kr. eller Gratis" />
            <InputComponent label="Sted" value={sted} onChangeText={setSted} placeholder="F.eks. Frederiksberg" />

            <Text style={GlobalStyle.inpLabel}>Kategori</Text>
            <View style={GlobalStyle.kategoriRaekke}>
                {KATEGORIER.map((k, key) => (
                    <View key={key} style={GlobalStyle.kategoriKnap}>
                        <ButtonComponent
                            titel={k}
                            type={kategori === k ? "primary" : "secondary"}
                            onPress={() => setKategori(k)}
                        />
                    </View>
                ))}
            </View>

            <Text style={GlobalStyle.inpLabel}>Billede</Text>
            <View style={GlobalStyle.billedKnapper}>
                <View style={GlobalStyle.billedKnap}>
                    <ButtonComponent
                        titel="Tag billede"
                        type="secondary"
                        onPress={() => navigation.navigate("Kamera", { retur: "Rediger" })}
                    />
                </View>
                <View style={GlobalStyle.billedKnap}>
                    <ButtonComponent titel="Vælg fra galleri" type="secondary" onPress={vaelgBillede} />
                </View>
            </View>
            {billede !== "" ? (
                <View>
                    <BilledeComponent url={{ uri: billede }} style={GlobalStyle.forhaandsvisning} />
                    <ButtonComponent titel="Fjern billede" type="secondary" onPress={() => setBillede("")} />
                </View>
            ) : (
                <Text style={GlobalStyle.billedTekst}>Intet billede på opslaget.</Text>
            )}

            {fejl !== "" && <Text style={GlobalStyle.fejl}>{fejl}</Text>}

            <View style={GlobalStyle.knapContainer}>
                <ButtonComponent titel="Gem ændringer" type="primary" onPress={gemAendringer} />
                <ButtonComponent titel="Fortryd" type="secondary" onPress={() => navigation.goBack()} />
            </View>
        </ScrollView>
    );
}
