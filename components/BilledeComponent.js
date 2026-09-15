import { Image, View } from "react-native";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function BilledeComponent({ url, style }) {
    return (
        <View>
            <Image source={url} style={style ? style : GlobalStyle.billede} />
        </View>
    );
}
