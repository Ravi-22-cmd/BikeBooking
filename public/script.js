function showBikes() {
    const bikes = [
      { name: "Sport", price: "$10.00 per hour", img: "🏍️" },
      { name: "Cruiser", price: "$12.50 per hour", img: "🏍️" },
      { name: "Touring", price: "$17.20 per hour", img: "🏍️" },
      { name: "Standard", price: "$9.50 per hour", img: "🏍️" }
    ];
  
    const container = document.getElementById("bike-list");
    container.innerHTML = "";
  
    bikes.forEach((bike) => {
      const card = document.createElement("div");
      card.className = "bike-card";
  
      card.innerHTML = `
        <div class="bike-img">${bike.img}</div>
        <h3>${bike.name}</h3>
        <p><strong>Rate:</strong> ${bike.price}</p>
        <button onclick="bookNow('${bike.name}')">Book Now</button>
      `;
  
      container.appendChild(card);
    });
  }
  
  // Dummy booking handler
  function bookNow(bikeName) {
    alert(`Booking confirmed for ${bikeName} bike!`);
  }
  