import { Text, View } from "react-native";
import BilledeComponent from "./BilledeComponent";
import { hentKategoriBillede } from "../data/const";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function OpslagCard({ titel, materiale, pris, sted, saelger, kategori, billede, dato }) {
    // Eget billede hvis der er et, ellers kategoriens billede
    const kilde = billede ? { uri: billede } : hentKategoriBillede(kategori);

    return (
        <View style={GlobalStyle.kort}>
            <BilledeComponent url={kilde} style={GlobalStyle.kortBillede} />
            <View style={GlobalStyle.kortTekst}>
                <Text style={GlobalStyle.kortTitel}>{titel}</Text>
                <Text style={GlobalStyle.kortMateriale}>{materiale}</Text>
                <View style={GlobalStyle.kortBund}>
                    <Text style={GlobalStyle.kortPris}>{pris}</Text>
                    <Text style={GlobalStyle.kortSted}>{sted}</Text>
                </View>
                <View style={GlobalStyle.kortBund}>
                    <Text style={GlobalStyle.kortSaelger}>Sælges af: {saelger}</Text>
                    {dato ? <Text style={GlobalStyle.kortSaelger}>Lagt op: {dato}</Text> : null}
                </View>
            </View>
        </View>
    );
}
