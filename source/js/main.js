"use strict";
// Получение данных
var menuList = document.querySelector(".menu");
var menuButton = menuList.querySelector(".menu__btn");
var menuLink = menuList.querySelectorAll(".menu__link");
var input = document.getElementById("phone");

menuList.classList.remove("menu--nojs");

// События
menuButton.addEventListener("click", function () {
  applyChanges();
});

for (var i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener("click", function () {
    applyChanges();
  });
}

input.oninvalid = function (event) {
  event.target.setCustomValidity(
    "Введите телефон в формате +7(XXX)XXXXXXX без использования букв"
  );
};

// Функции
function applyChanges() {
  if (menuList.classList.contains("menu--opened")) {
    menuList.classList.add("menu--closed");
    menuList.classList.remove("menu--opened");
  } else {
    menuList.classList.add("menu--opened");
    menuList.classList.remove("menu--closed");
  }
}
