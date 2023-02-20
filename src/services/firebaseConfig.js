import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDZp2rIj4nsY1lNYI84WJtl-KbhYliEOtE",
  authDomain: "inventory-mcpf.firebaseapp.com",
  projectId: "inventory-mcpf",
  storageBucket: "inventory-mcpf.appspot.com",
  messagingSenderId: "789969738809",
  appId: "1:789969738809:web:2320ed8bc6a39c0ce801e8"
};

export const app = initializeApp(firebaseConfig);