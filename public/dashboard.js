// dashboard.js
import { auth } from './firebase-config.js';
import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';

// Elements
const userEmailDisplay = document.getElementById("user-email");
const logoutBtn = document.getElementById("logout-btn");

// Show user info
onAuthStateChanged(auth, (user) => {
  if (user) {
    userEmailDisplay.textContent = user.email;
  } else {
    window.location.href = "login.html"; // If not logged in, redirect to login
  }
});

// Logout
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("Logged out successfully!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("Logout failed: " + error.message);
    });
});
