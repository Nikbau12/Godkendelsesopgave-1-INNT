import { useEffect, useRef, useState } from "react";
import { Alert, Platform, ScrollView, Text, View } from "react-native";
import { ref, onValue, remove } from "firebase/database";
import { auth, rtdb } from "../../database/firebase";
import BilledeComponent from "../../components/BilledeComponent";
import ButtonComponent from "../../components/ButtonComponent";
import { GlobalStyle } from "../../styles/GlobalStyle";

export default function OpslagDetaljeScreen({ navigation, route }) {
    const id = route.params.id;
    const [opslag, setOpslag] = useState(route.params.opslag);
    const [fejl, setFejl] = useState("");
    // Markerer at VI sletter, så lytteren ikke også kalder goBack
    const sletter = useRef(false);

    // Lytter på netop dette opslag, så en redigering slår igennem med det samme
    useEffect(() => {
        const opslagRef = ref(rtdb, "/Opslag/" + id);
        const unsubscribe = onValue(opslagRef, (snap) => {
            const data = snap.val();
            if (data) {
                setOpslag({ id: id, ...data });
            } else if (!sletter.current) {
                // Opslaget er slettet af en anden - gå tilbage til oversigten
                navigation.goBack();
            }
        });
        return unsubscribe;
    }, [id]);

    // Kun den der har oprettet opslaget må redigere og slette det
    const erMitOpslag = opslag.saelger === auth.currentUser?.email;

    const slet = async () => {
        sletter.current = true;
        try {
            await remove(ref(rtdb, "/Opslag/" + id));
            navigation.goBack();
        } catch (e) {
            sletter.current = false;
            setFejl(e?.message || "Kunne ikke slette opslaget.");
        }
    };

    const bekraeftSlet = () => {
        // Alert findes ikke i browseren, så der bruges confirm på web
        if (Platform.OS === "web") {
            if (window.confirm("Slet opslaget? Det kan ikke fortrydes.")) slet();
            return;
        }
        Alert.alert("Slet opslag", "Er du sikker? Det kan ikke fortrydes.", [
            { text: "Fortryd", style: "cancel" },
            { text: "Slet", style: "destructive", onPress: slet },
        ]);
    };

    return (
        <ScrollView style={GlobalStyle.container}>
            <ButtonComponent titel="Tilbage" type="secondary" onPress={() => navigation.goBack()} />

            <Text style={GlobalStyle.overskrift}>{opslag.titel}</Text>

            {opslag.billede ? (
                <BilledeComponent url={{ uri: opslag.billede }} style={GlobalStyle.detaljeBillede} />
            ) : (
                <Text style={GlobalStyle.billedTekst}>Der er ikke lagt et billede op til dette opslag.</Text>
            )}

            <View style={GlobalStyle.detaljeRaekke}>
                <Text style={GlobalStyle.kortPris}>{opslag.pris}</Text>
                <Text style={GlobalStyle.kortSted}>{opslag.sted}</Text>
            </View>

            <Text style={GlobalStyle.detaljeTekst}>{opslag.materiale}</Text>

            <Text style={GlobalStyle.detaljeLabel}>Kategori: {opslag.kategori}</Text>
            <Text style={GlobalStyle.detaljeLabel}>Sælges af: {opslag.saelger}</Text>
            {opslag.dato ? <Text style={GlobalStyle.detaljeLabel}>Lagt op: {opslag.dato}</Text> : null}

            {fejl !== "" && <Text style={GlobalStyle.fejl}>{fejl}</Text>}

            {erMitOpslag ? (
                <View style={GlobalStyle.knapContainer}>
                    <ButtonComponent
                        titel="Rediger opslag"
                        type="primary"
                        onPress={() => navigation.navigate("Rediger", { id: id, opslag: opslag })}
                    />
                    <ButtonComponent titel="Slet opslag" type="fare" onPress={bekraeftSlet} />
                </View>
            ) : (
                <View style={GlobalStyle.knapContainer}>
                    <Text style={GlobalStyle.billedTekst}>Du kan kun redigere og slette dine egne opslag.</Text>
                </View>
            )}
        </ScrollView>
    );
}
