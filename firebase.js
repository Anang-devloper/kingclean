import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "ISI_API_KEY_KAMU",
  authDomain: "aa33a6.firebaseapp.com",
  projectId: "aa33a6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
