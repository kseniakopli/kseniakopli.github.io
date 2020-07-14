// Получение данных
const menu = document.querySelector(".menu");
const menuButton = menu.querySelector(".menu__btn");
const menuLink = menu.querySelectorAll(".menu__link");

//События
menuButton.addEventListener("click", function () {
  applyChanges();
});

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener("click", function () {
    applyChanges();
  });
}

//Функции

function applyChanges() {
  if (menu.classList.contains("menu--opened")) {
    menu.classList.add("menu--closed");
    menu.classList.remove("menu--opened");
  } else {
    menu.classList.add("menu--opened");
    menu.classList.remove("menu--closed");
  }
}
