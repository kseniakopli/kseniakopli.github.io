"use strict";

// Получение данных
var menuList = document.querySelector(".menu");
var menuButton = menuList.querySelector(".menu__btn");
var menuLink = menuList.querySelectorAll(".menu__link");
var input = document.getElementById("phone");
var submit = document.getElementById("submit");

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

submit.addEventListener("click", function () {
  input.oninvalid = function (event) {
    event.target.setCustomValidity(
      "Введите телефон без использования букв и символов"
    );
    input.oninput = function (event) {
      event.target.setCustomValidity("");
    };
  };
});

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
