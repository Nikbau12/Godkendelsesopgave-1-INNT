# ReStock

Mobilapp til køb og salg af overskydende byggematerialer. Håndværkere og private kan
sælge eller forære materialer væk, som ellers ville ende i containeren, og andre kan
finde billige materialer i nærheden.

## Links

- **GitHub:** https://github.com/Nikbau12/Godkendelsesopgave-1-INNT
- **Demovideo:** INDSÆT LINK TIL DEMOVIDEO

## Sådan kører du appen

```bash
npm install
npx expo start
```

Scan derefter QR-koden med Expo Go-appen på din telefon.
Husk at udfylde `database/firebase.js` med din egen Firebase-config først (se nedenfor).

## Hvad appen kan

- **Login** - opret en bruger eller log ind med e-mail og kodeord (Firebase Authentication)
- **Forside** - introduktion til både købere og sælgere, viser hvem der er logget ind, og har en log ud-knap
- **Oversigt** - liste over materialer til salg med billede, pris, sted, sælger og dato. Kan filtreres på kategori
- **Detaljer** - tryk på et opslag for at se det i fuld størrelse. Er det dit eget, kan du redigere eller slette det
- **Opret opslag** - formular hvor man vælger kategori og tilføjer sit eget billede, enten med kameraet eller fra galleriet
- **Kamera** - tag et billede af materialerne, som sendes tilbage til formularen

Opslag gemmes i Firebase Realtime Database, så de er der stadig, når appen genstartes,
og alle brugere kan se dem. Billederne gemmes som tekst (base64) sammen med opslaget.
Et opslag viser kun det billede, brugeren selv lægger op - der findes ingen standardbilleder.

## Nyt i denne version

- Login med Firebase (e-mail og kodeord)
- Opslag gemmes og hentes fra Firebase Realtime Database
- Eget billede via kamera (`expo-camera`) eller galleri (`expo-image-picker`)
- Filter på kategori i oversigten
- Dato for hvornår et opslag er lagt op
- Forsiden taler nu både til købere og sælgere
- Detaljeskærm hvor egne opslag kan redigeres og slettes
- Flere kategorier at vælge imellem

## Opsætning af Firebase

1. Gå til https://console.firebase.google.com og åbn projektet
2. **Authentication** -> Get started -> Sign-in method -> slå **Email/Password** til
3. **Realtime Database** -> Create database -> Belgium -> Test mode
4. Projektindstillinger (tandhjulet) -> Your apps -> `</>` for at registrere en web-app
5. Kopiér `firebaseConfig` ind i `database/firebase.js`, og sæt databasens URL ind i `getDatabase`

Opslagene ligger under `Opslag` i databasen.

## Filstruktur

```
components/             Genbrugelige komponenter (knap, tekstfelt, billede, opslagskort,
                        login, opret bruger) og de to stack-navigationer
screens/                Forside, Oversigt, Opret opslag og AuthScreen (login)
screens/StackScreens/   KameraScreen, OpslagDetaljeScreen og RedigerOpslagScreen
database/               firebase.js - al Firebase-opsætning samlet ét sted
data/                   const.js - listen over kategorier
styles/                 GlobalStyle.js - al styling samlet ét sted
assets/                 Billeder
App.js                  Login-tjek og tab-navigationen sættes op her
```

## Teknik

React Native med Expo. Navigation med React Navigation (bottom tabs og stack).
Firebase til login og database. Ikoner fra `@expo/vector-icons`.
