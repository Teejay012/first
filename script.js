const hamburger = document.querySelector(".navigation__hamburger");
const navList = document.querySelector(".navigation__nav-list");
const closeHamburgerBtn = document.querySelector(".navigation__close-hamburger")

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

closeHamburgerBtn.addEventListener("click", ()=>{
    navList.classList.remove("open");
})

// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}