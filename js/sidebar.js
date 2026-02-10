function openSidebar() {
  document.getElementById("sidebar").classList.remove("sidebar-hidden");
  document.getElementById("sidebarOverlay").classList.remove("hidden");
}

function closeSidebar() {
  document.getElementById("sidebar").classList.add("sidebar-hidden");
  document.getElementById("sidebarOverlay").classList.add("hidden");
}
