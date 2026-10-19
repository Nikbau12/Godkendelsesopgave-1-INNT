import { Platform } from "react-native";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Indsæt din egen config her fra Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyCNH7z566XNodLzLffOnpIBVYjnwTItJ2o",
    authDomain: "innt-7578d.firebaseapp.com",
    projectId: "innt-7578d",
    storageBucket: "innt-7578d.firebasestorage.app",
    messagingSenderId: "1010812931807",
    appId: "1:1010812931807:web:beb207e95053880f2a236a",
};

// Init kun én gang
export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Brug RTDB-URL'en fra Realtime Database (Belgium = europe-west1)
export const rtdb = getDatabase(
    firebaseApp,
    "https://innt-7578d-default-rtdb.europe-west1.firebasedatabase.app"
);

// Login huskes på telefonen med AsyncStorage. I browseren bruges standard
export const auth =
    Platform.OS === "web"
        ? getAuth(firebaseApp)
        : initializeAuth(firebaseApp, {
              persistence: getReactNativePersistence(AsyncStorage),
          });
