import { auth, onAuthStateChanged, signOut } from "./firebase-config.js";

// DOM Elements
const darkModeToggle = document.getElementById("darkmode");
const body = document.body;
const saveBtn = document.getElementById("save-settings-btn");
const userNameEl = document.getElementById("user-name");
const userEmailEl = document.getElementById("user-email");
const profileImg = document.getElementById("profile-pic");

// Load Dark Mode from localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark");
  darkModeToggle.checked = true;
}

// Toggle Dark Mode
darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    body.classList.add("dark");
    localStorage.setItem("darkMode", "enabled");
  } else {
    body.classList.remove("dark");
    localStorage.setItem("darkMode", "disabled");
  }
});

// Optional: Save Settings Button
saveBtn.addEventListener("click", () => {
  alert("Settings saved!");
});

// Load Authenticated User Info
onAuthStateChanged(auth, (user) => {
  if (user) {
    userNameEl.textContent = user.displayName || "User";
    userEmailEl.textContent = user.email;

    if (user.photoURL) {
      profileImg.src = user.photoURL;
    }
  } else {
    // Not logged in, redirect to login
    window.location.href = "login.html";
  }
});
