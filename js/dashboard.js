// Balance evolution chart
const balanceCtx = document.getElementById("balanceChart");

new Chart(balanceCtx, {
  type: "line",
  data: {
    labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
    datasets: [{
      label: "Solde USD",
      data: [1800, 2000, 1900, 2200, 2300, 2450],
      borderColor: "#4f46e5",
      backgroundColor: "rgba(79, 70, 229, 0.15)",
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: {
      y: { display: false },
      x: { display: true }
    }
  }
});

// Transactions distribution chart
const transactionCtx = document.getElementById("transactionChart");

new Chart(transactionCtx, {
  type: "doughnut",
  data: {
    labels: ["Reçus", "Envoyés"],
    datasets: [{
      data: [65, 35],
      backgroundColor: ["#22c55e", "#ef4444"]
    }]
  },
  options: {
    plugins: { legend: { position: "bottom" } }
  }
});

console.log("Dashboard Trustlink chargé – Congo 2026");
