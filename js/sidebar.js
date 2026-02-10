// Ouvrir la sidebar
window.openSidebar = function () {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  if (!sidebar || !overlay) return;

  sidebar.style.transform = "translateX(0)";
  overlay.classList.remove("hidden");
};

// Fermer la sidebar
window.closeSidebar = function () {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  if (!sidebar || !overlay) return;

  sidebar.style.transform = "translateX(-100%)";
  overlay.classList.add("hidden");
};

// Gestion clic overlay et bouton fermer
document.addEventListener("click", function (e) {
  if (
    e.target.id === "sidebarOverlay" ||
    e.target.id === "closeSidebarBtn"
  ) {
    closeSidebar();
  }
});
