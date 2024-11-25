function toggleMenu() {

  var headerMenu = document.querySelector('.header-menu')
  var icon = document.querySelector('.header-menu-icon i')

  if (headerMenu.style.display === "none") {
      headerMenu.style.display = "flex";
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
  } else {
      headerMenu.style.display = "none";
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");     
  }
}
