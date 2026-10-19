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
        height: 180,
        borderRadius: 8,
        marginBottom: 6,
    },
    billedKnapper: {
        flexDirection: "row",
        marginBottom: 10,
    },
    billedKnap: {
        flex: 1,
        marginRight: 8,
    },
    billedTekst: {
        fontSize: 12,
        color: "#888",
        marginBottom: 14,
    },

    // Filter paa OversigtScreen
    filterRaekke: {
        marginBottom: 10,
    },

    // AuthScreen og ForsideScreen
    authBoks: {
        width: "100%",
    },
    skiftLink: {
        color: "#2E7D32",
        fontSize: 15,
        marginTop: 20,
        textDecorationLine: "underline",
    },
    loggetInd: {
        fontSize: 13,
        color: "#888",
        marginTop: 30,
    },

    // KameraScreen
    kameraContainer: {
        flex: 1,
        backgroundColor: "#000",
    },
    kamera: {
        flex: 1,
    },
    kameraKnapper: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 20,
    },
    kameraKnap: {
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        borderRadius: 40,
        padding: 12,
    },
    snapKnap: {
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        height: 80,
        width: 80,
        borderRadius: 40,
        borderWidth: 4,
        borderColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    snapTekst: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
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

    // OpslagCard - tryk-feedback
    kortTrykket: {
        opacity: 0.85,
    },

    // OpslagDetaljeScreen
    detaljeBillede: {
        width: "100%",
        height: 220,
        borderRadius: 10,
        marginBottom: 14,
    },
    detaljeTekst: {
        fontSize: 15,
        color: "#555",
        lineHeight: 22,
        marginBottom: 12,
    },
    detaljeRaekke: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },
    detaljeLabel: {
        fontSize: 13,
        color: "#888",
    },

    // ButtonComponent - farlig handling (slet)
    fareBtn: {
        defaultColor: "#C62828",
        pressedColor: "#8E0000",
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    fareBtnText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
