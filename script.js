"use strict";

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const featureBtn = document.querySelector(".features");
const companyBtn = document.querySelector(".company");
const featureToggle = document.querySelector(".featureToggle");
const companyToggle = document.querySelector(".companyToggle");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

featureBtn.addEventListener("click", () => {
  featureToggle.classList.toggle("active");
});

companyBtn.addEventListener("click", () => {
  companyToggle.classList.toggle("active");
});
