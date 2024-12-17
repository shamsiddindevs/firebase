
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCSFJ4dF-2kjbi5cYEH94TbmE-OJbquFTg",
    authDomain: "hanyuban-b6357.firebaseapp.com",
    projectId: "hanyuban-b6357",
    storageBucket: "hanyuban-b6357.firebasestorage.app",
    messagingSenderId: "10625741905",
    appId: "1:10625741905:web:8718cead239f781866f470",
    measurementId: "G-21HBJTNJDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth();








function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;

         message.innerHTML = `<p style="color:green;">Sign-up successful! Welcome, ${user.email}</p>`;
            console.log("User created: ", user);
    })
    .catch((error) => {
        message.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
            console.error("Error during sign-up: ", error);
        // ..
    });
}
