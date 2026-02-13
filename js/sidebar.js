fetch("../partials/sidebar.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("sidebar-container").innerHTML = html;

    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const closeBtn = document.getElementById("closeSidebarBtn");

    window.openSidebar = function () {
      sidebar.classList.remove("-translate-x-full");
      overlay.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    };

    function closeSidebar() {
      sidebar.classList.add("-translate-x-full");
      overlay.classList.add("hidden");
      document.body.style.overflow = "";
    }

    overlay.addEventListener("click", closeSidebar);
    closeBtn.addEventListener("click", closeSidebar);
  });
