const burger = document.querySelector(".header__button");
const nav = document.querySelector(".header__nav")

burger.addEventListener("click", function() {
  burger.classList.toggle("header__button--opening");
  nav.classList.toggle("nav");
})

