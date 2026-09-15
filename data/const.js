// Kategorier med hvert sit billede. Bruges både til opslagene herunder
// og til at vælge billede, når brugeren opretter et nyt opslag.
export const KATEGORIER = [
    { navn: "Træ", billede: require("../assets/materialer/trae.png") },
    { navn: "Gips", billede: require("../assets/materialer/gips.png") },
    { navn: "Fliser", billede: require("../assets/materialer/fliser.png") },
    { navn: "Isolering", billede: require("../assets/materialer/isolering.png") },
    { navn: "Andet", billede: require("../assets/materialer/diverse.png") },
];

export const OPSLAG = [
    {
        id: "1",
        titel: "Træbjælker, 12 stk.",
        materiale: "Trykimprægneret fyr, 45x95 mm, 240 cm",
        pris: "400 kr.",
        sted: "Frederiksberg",
        saelger: "Mikkels Tømrer ApS",
        billede: require("../assets/materialer/trae.png"),
    },
    {
        id: "2",
        titel: "Gipsplader, 8 stk.",
        materiale: "Standard gips, 900x2400 mm, ubrudte",
        pris: "250 kr.",
        sted: "Amager",
        saelger: "Private - Louise",
        billede: require("../assets/materialer/gips.png"),
    },
    {
        id: "3",
        titel: "Klinker til badeværelse",
        materiale: "Ca. 6 m², grå 30x30 cm, uåbnede pakker",
        pris: "600 kr.",
        sted: "Valby",
        saelger: "BygCenter Syd",
        billede: require("../assets/materialer/fliser.png"),
    },
    {
        id: "4",
        titel: "Isolering, 3 ruller",
        materiale: "Rockwool 95 mm, overskud fra tagprojekt",
        pris: "Gratis - skal bare hentes",
        sted: "Hvidovre",
        saelger: "Private - Jonas",
        billede: require("../assets/materialer/isolering.png"),
    },
    {
        id: "5",
        titel: "Terrassebrædder",
        materiale: "Lærketræ, 28x120 mm, ca. 18 lbm.",
        pris: "900 kr.",
        sted: "Gentofte",
        saelger: "Have & Anlæg A/S",
        billede: require("../assets/materialer/trae.png"),
    },
];
