import { StyleSheet } from "react-native";

export const GlobalStyle = StyleSheet.create({
    // Fælles containere
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        padding: 20,
    },
    forsideContainer: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },

    // Fælles tekst
    overskrift: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#1B5E20",
        marginBottom: 4,
    },
    underOverskrift: {
        fontSize: 14,
        color: "#888",
        marginBottom: 16,
    },

    // ForsideScreen
    forsideTitel: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#1B5E20",
        marginBottom: 8,
    },
    forsideSlogan: {
        fontSize: 17,
        fontWeight: "bold",
        textAlign: "center",
        color: "#2E7D32",
        marginBottom: 20,
    },
    forsideTekst: {
        fontSize: 15,
        textAlign: "center",
        color: "#555",
        lineHeight: 22,
        marginBottom: 30,
    },
    forsideKnapper: {
        width: "100%",
        alignItems: "center",
    },

    // OversigtScreen
    listeContainer: {
        flex: 1,
    },

    // OpslagCard
    kort: {
        backgroundColor: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    kortBillede: {
        width: "100%",
        height: 130,
    },
    kortTekst: {
        padding: 15,
    },
    kortTitel: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#222",
        marginBottom: 4,
    },
    kortMateriale: {
        fontSize: 14,
        color: "#555",
        marginBottom: 10,
    },
    kortBund: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 6,
    },
    kortPris: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#2E7D32",
    },
    kortSted: {
        fontSize: 14,
        color: "#555",
    },
    kortSaelger: {
        fontSize: 12,
        color: "#888",
    },

    // OpretOpslagScreen
    fejl: {
        color: "#C62828",
        fontSize: 14,
        marginBottom: 10,
    },
    knapContainer: {
        marginTop: 10,
        marginBottom: 40,
    },

    // BilledeComponent
    billede: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },

    // Billedvalg paa OpretOpslagScreen
    kategoriRaekke: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        marginBottom: 10,
    },
    kategoriKnap: {
        marginRight: 8,
    },
    forhaandsvisning: {
        width: "100%",
        height: 120,
        borderRadius: 8,
        marginBottom: 14,
    },

    // ButtonComponent (defaultColor/pressedColor er custom felter, se 04_styling.md)
    primaryBtn: {
        defaultColor: "#2E7D32",
        pressedColor: "#1B5E20",
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    primaryBtnText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    secondaryBtn: {
        defaultColor: "#E8F5E9",
        pressedColor: "#C8E6C9",
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#2E7D32",
        alignItems: "center",
        justifyContent: "center",
    },
    secondaryBtnText: {
        color: "#2E7D32",
        fontSize: 16,
        fontWeight: "bold",
    },

    // InputComponent
    inputGruppe: {
        marginBottom: 14,
    },
    inpLabel: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 4,
    },
    textInput: {
        height: 44,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        backgroundColor: "#fff",
        fontSize: 15,
    },

    // Navigation (Tab.Navigator screenOptions)
    header: {
        backgroundColor: "#2E7D32",
    },
    headerTitel: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
        letterSpacing: 0.5,
    },
    tabBar: {
        backgroundColor: "#2E7D32",
        paddingTop: 5,
    },
});
