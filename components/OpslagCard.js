import { Text, View } from "react-native";
import BilledeComponent from "./BilledeComponent";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function OpslagCard({ titel, materiale, pris, sted, saelger, billede }) {
    return (
        <View style={GlobalStyle.kort}>
            <BilledeComponent url={billede} style={GlobalStyle.kortBillede} />
            <View style={GlobalStyle.kortTekst}>
                <Text style={GlobalStyle.kortTitel}>{titel}</Text>
                <Text style={GlobalStyle.kortMateriale}>{materiale}</Text>
                <View style={GlobalStyle.kortBund}>
                    <Text style={GlobalStyle.kortPris}>{pris}</Text>
                    <Text style={GlobalStyle.kortSted}>{sted}</Text>
                </View>
                <Text style={GlobalStyle.kortSaelger}>Sælges af: {saelger}</Text>
            </View>
        </View>
    );
}
