import { Text, View } from "react-native";
import BilledeComponent from "./BilledeComponent";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function OpslagCard({ titel, materiale, pris, sted, saelger, kategori, billede, dato }) {
    return (
        <View style={GlobalStyle.kort}>
            {/* Kun brugerens eget billede - der findes ingen standardbilleder */}
            {billede ? <BilledeComponent url={{ uri: billede }} style={GlobalStyle.kortBillede} /> : null}
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
                {kategori ? <Text style={GlobalStyle.kortSaelger}>Kategori: {kategori}</Text> : null}
            </View>
        </View>
    );
}
