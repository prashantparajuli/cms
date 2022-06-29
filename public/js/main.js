const toggleBtn = document.querySelector("#toggle-btn");
const nav = document.querySelector(".nav-link");
const main = document.querySelector("#main");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("nav-link-active");
  main.classList.toggle("sidebar-open");
})