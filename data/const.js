// Kategorier med hvert sit billede. Billedet bruges, hvis et opslag ikke har sit eget.
export const KATEGORIER = [
    { navn: "Træ", billede: require("../assets/materialer/trae.png") },
    { navn: "Gips", billede: require("../assets/materialer/gips.png") },
    { navn: "Fliser", billede: require("../assets/materialer/fliser.png") },
    { navn: "Isolering", billede: require("../assets/materialer/isolering.png") },
    { navn: "Andet", billede: require("../assets/materialer/diverse.png") },
];

// Finder kategoriens billede ud fra navnet
export const hentKategoriBillede = (navn) => {
    const kategori = KATEGORIER.find((k) => k.navn === navn);
    return kategori ? kategori.billede : KATEGORIER[4].billede;
};

// Eksempel-opslag, som vises under opslagene fra databasen
export const OPSLAG = [
    {
        id: "eksempel-1",
        titel: "Træbjælker, 12 stk.",
        materiale: "Trykimprægneret fyr, 45x95 mm, 240 cm",
        pris: "400 kr.",
        sted: "Frederiksberg",
        saelger: "Mikkels Tømrer ApS",
        kategori: "Træ",
        billede: "",
        dato: "14.10.2026",
    },
    {
        id: "eksempel-2",
        titel: "Gipsplader, 8 stk.",
        materiale: "Standard gips, 900x2400 mm, ubrudte",
        pris: "250 kr.",
        sted: "Amager",
        saelger: "Private - Louise",
        kategori: "Gips",
        billede: "",
        dato: "12.10.2026",
    },
    {
        id: "eksempel-3",
        titel: "Klinker til badeværelse",
        materiale: "Ca. 6 m², grå 30x30 cm, uåbnede pakker",
        pris: "600 kr.",
        sted: "Valby",
        saelger: "BygCenter Syd",
        kategori: "Fliser",
        billede: "",
        dato: "9.10.2026",
    },
    {
        id: "eksempel-4",
        titel: "Isolering, 3 ruller",
        materiale: "Rockwool 95 mm, overskud fra tagprojekt",
        pris: "Gratis - skal bare hentes",
        sted: "Hvidovre",
        saelger: "Private - Jonas",
        kategori: "Isolering",
        billede: "",
        dato: "6.10.2026",
    },
    {
        id: "eksempel-5",
        titel: "Terrassebrædder",
        materiale: "Lærketræ, 28x120 mm, ca. 18 lbm.",
        pris: "900 kr.",
        sted: "Gentofte",
        saelger: "Have & Anlæg A/S",
        kategori: "Træ",
        billede: "",
        dato: "2.10.2026",
    },
];
