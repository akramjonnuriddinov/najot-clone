"use strict";

const elDarkModeButton = document.querySelector(".dark-mode-btn");
const darkModeSun = document.querySelector(".dark-mode-sun");
const darkModeMoon = document.querySelector(".dark-mode-moon");

elDarkModeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  darkModeMoon.classList.toggle("dark-mode-icon-none");
  darkModeSun.classList.toggle("dark-mode-icon-none");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});

const headerBurgerOpen = document.querySelector(".header__burger");
const mobileMenuClose = document.querySelector(".mobile-menu__close");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuOverlay = document.querySelector(".mobile-menu__overlay");

headerBurgerOpen.addEventListener("click", function () {
  mobileMenu.classList.add("show");
  document.body.classList.add("show");
});

mobileMenuClose.addEventListener("click", function () {
  mobileMenu.classList.remove("show");
  document.body.classList.remove("show");
});

mobileMenuOverlay.addEventListener("click", function () {
  mobileMenu.classList.remove("show");
  document.body.classList.remove("show");
});
