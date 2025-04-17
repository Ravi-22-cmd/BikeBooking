firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      console.log("User is logged in:", user.email);
    } else {
      // Not logged in
      console.log("User not logged in");
    }
  });
  if (!user) {
    window.location.href = "login.html"; 
  }
  