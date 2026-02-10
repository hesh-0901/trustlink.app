// ===============================
// TRUSTLINK - SIDEBAR (SAFE MODE)
// ===============================

// Ouvrir la sidebar
window.openSidebar = function () {
  const sidebar = document.querySelector("#sidebar");
  const overlay = document.querySelector("#sidebarOverlay");

  if (!sidebar || !overlay) {
    console.warn("Sidebar non trouvée");
    return;
  }

  sidebar.style.transform = "translateX(0)";
  overlay.classList.remove("hidden");
};

// Fermer la sidebar
window.closeSidebar = function () {
  const sidebar = document.querySelector("#sidebar");
  const overlay = document.querySelector("#sidebarOverlay");

  if (!sidebar || !overlay) return;

  sidebar.style.transform = "translateX(-100%)";
  overlay.classList.add("hidden");
};
