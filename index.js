const closeBtn = document.querySelector(".close-nav");
const navWindow = document.querySelector(".nav");
const openBtn = document.querySelector(".open-btn");

function closeNav() {
  closeBtn.addEventListener("click", () => {
    navWindow.classList.remove("toggle-nav");
    console.log("yes");
  });
}
function openNav() {
  openBtn.addEventListener("click", () => {
    navWindow.classList.add("toggle-nav");
  });
}

document.addEventListener("DOMContentLoaded", closeNav);
document.addEventListener("DOMContentLoaded", openNav);
