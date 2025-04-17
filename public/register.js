// register.js
import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

document.getElementById("register-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Form submit hone se reload na ho

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const phone = this.phone.value.trim();
  const password = this.password.value.trim();

  // User ko Firebase Auth me register karna
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Registration success
      alert("Registration successful!");
      console.log("User Info:", userCredential.user);

      // Form reset
      this.reset();

      // Redirect to login page
      window.location.href = "login.html";
    })
    .catch((error) => {
      console.error("Error during registration:", error);
      alert("Error: " + error.message);
    });
});
