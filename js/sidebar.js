// Détection automatique du bon chemin vers /partials
const sidebarPath = window.location.pathname.includes("/pages/")
  ? "../partials/sidebar.html"
  : "partials/sidebar.html";

fetch(sidebarPath)
  .then(response => {
    if (!response.ok) {
      throw new Error("Erreur chargement sidebar : " + response.status);
    }
    return response.text();
  })
  .then(html => {
    // Injection HTML
    const container = document.getElementById("sidebar-container");
    if (!container) {
      console.error("sidebar-container introuvable");
      return;
    }

    container.innerHTML = html;

    // Récupération des éléments APRÈS injection
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const closeBtn = document.getElementById("closeSidebarBtn");

    if (!sidebar || !overlay) {
      console.error("Éléments sidebar non trouvés après injection");
      return;
    }

    // Ouvrir
    window.openSidebar = function () {
      sidebar.classList.remove("-translate-x-full");
      overlay.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    };

    // Fermer
    window.closeSidebar = function () {
      sidebar.classList.add("-translate-x-full");
      overlay.classList.add("hidden");
      document.body.style.overflow = "";
    };

    // Events
    overlay.addEventListener("click", window.closeSidebar);

    if (closeBtn) {
      closeBtn.addEventListener("click", window.closeSidebar);
    }

    console.log("Sidebar chargée correctement ✔️");
  })
  .catch(error => {
    console.error("Erreur lors du chargement de la sidebar :", error);
  });
