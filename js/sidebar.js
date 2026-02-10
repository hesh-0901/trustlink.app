// Sidebar elements
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebarOverlay");
const closeBtn = document.getElementById("closeSidebarBtn");

// Ouvrir la sidebar
window.openSidebar = function () {
  if (!sidebar || !overlay) return;

  sidebar.style.transform = "translateX(0)";
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // bloque le scroll
};

// Fermer la sidebar
window.closeSidebar = function () {
  if (!sidebar || !overlay) return;

  sidebar.style.transform = "translateX(-100%)";
  overlay.classList.add("hidden");
  document.body.style.overflow = ""; // réactive le scroll
};

// Clic overlay = fermer
if (overlay) {
  overlay.addEventListener("click", () => {
    closeSidebar();
  });
}

// Clic bouton fermer
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    closeSidebar();
  });
}