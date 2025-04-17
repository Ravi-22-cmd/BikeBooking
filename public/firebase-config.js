import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDlozpsdBS2CwhVVeceD7fbH_-vyOPVPZI",
  authDomain: "bikebookingappbikebookingapp.firebaseapp.com",
  projectId: "bikebookingappbikebookingapp",
  storageBucket: "bikebookingappbikebookingapp.appspot.com",
  messagingSenderId: "680910216709",
  appId: "1:680910216709:web:ccd4a18198c792a1e1866c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
