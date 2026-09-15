# ReStock

Mobilapp til genbrug af overskydende byggematerialer. Håndværkere og private kan
sælge eller forære materialer væk, som ellers ville ende i containeren.

## Links

- **GitHub:** https://github.com/Nikbau12/Godkendelsesopgave-1-INNT
- **Demovideo:** https://youtu.be/RBfcZkXyBDc

## Sådan kører du appen

```bash
npm install
npx expo start
```

Scan derefter QR-koden med Expo Go-appen på din telefon.

## Hvad appen kan

- **Forside** - introduktion til appen med knapper videre til de to andre skærme
- **Oversigt** - liste over materialer til salg, vist som kort med billede, pris og sted
- **Opret opslag** - formular hvor man kan slå sine egne materialer op, inkl. valg af billede

Nye opslag lægger sig øverst i oversigten med det samme. De gemmes i appens
hukommelse og forsvinder derfor, når appen genstartes.

## Filstruktur

```
components/     Genbrugelige komponenter (knap, tekstfelt, billede, opslagskort)
screens/        De tre skærme
data/           Start-data og kategorier med billeder
styles/         GlobalStyle.js - al styling samlet ét sted
assets/         Billeder
App.js          Navigationen sættes op her
```

## Teknik

React Native med Expo. Navigation med React Navigation (bottom tabs).
Ikoner fra `@expo/vector-icons`.
