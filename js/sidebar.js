// Construction dynamique du bon chemin GitHub Pages
const baseUrl = window.location.origin + "/" + window.location.pathname.split("/")[1];
const sidebarPath = baseUrl + "/partials/sidebar.html";

fetch(sidebarPath)
  .then(response => {
    if (!response.ok) {
      throw new Error("Erreur chargement sidebar : " + response.status);
    }
    return response.text();
  })
  .then(html => {
    const container = document.getElementById("sidebar-container");
    if (!container) {
      console.error("sidebar-container introuvable");
      return;
    }

    container.innerHTML = html;

    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const closeBtn = document.getElementById("closeSidebarBtn");

    if (!sidebar || !overlay) {
      console.error("Éléments sidebar non trouvés");
      return;
    }

    window.openSidebar = function () {
      sidebar.classList.remove("-translate-x-full");
      overlay.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    };

    window.closeSidebar = function () {
      sidebar.classList.add("-translate-x-full");
      overlay.classList.add("hidden");
      document.body.style.overflow = "";
    };

    overlay.addEventListener("click", window.closeSidebar);

    if (closeBtn) {
      closeBtn.addEventListener("click", window.closeSidebar);
    }

    console.log("Sidebar chargée correctement sur GitHub ✔️");
  })
  .catch(error => {
    console.error("Erreur sidebar GitHub :", error);
  });
