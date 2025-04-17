function bookNow() {
    alert("Booking Confirmed!");
  }
  function logout() {
    firebase.auth().signOut()
      .then(() => {
        alert("Logged out successfully");
        window.location.href = "login.html";
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  }
  