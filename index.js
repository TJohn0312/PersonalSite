// -------About Page--------
    var tabLinks = document.getElementsByClassName("tab-links");
    var tabContents = document.getElementsByClassName("tab-contents");

// Remove class active-x on click to remove content on page
    function openTab(tabName) {
      for(tabLink of tabLinks) {
        tabLink.classList.remove("active-link")
      }
      for(tabContent of tabContents) {
        tabContent.classList.remove("active-tab")
      }
// Adding content back to the page on click
      event.currentTarget.classList.add("active-link")
      document.getElementById(tabName).classList.add("active-tab")
    }

// -------- Responsive ---------

  var sideMenu = document.getElementById("sideMenu");

  function openMenu() {
    sideMenu.style.right = "0";
}
  function closeMenu() {
    sideMenu.style.right = "-200px";
}
