const ctx = document.getElementById("balanceChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
    datasets: [{
      data: [1800, 2000, 1900, 2200, 2300, 2450],
      borderColor: "#6d2cf3",
      backgroundColor: "rgba(109,44,243,0.1)",
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: {
      y: { display: false },
      x: { grid: { display: false } }
    }
  }
});

console.log("Trustlink v2 chargé 🚀");
