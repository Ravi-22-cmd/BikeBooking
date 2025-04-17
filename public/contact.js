document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
  
    console.log("Contact Form Submission:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  
    alert("Message Sent Successfully (Dummy)");
  
    this.reset();
  });
  