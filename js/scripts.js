// Custom Scripts
// Модальное окно
function bindModal(trigger, modal, close) {
  (trigger = document.querySelector(trigger)),
    (modal = document.querySelector(modal)),
    (close = document.querySelector(close));

  const body = document.body;

  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
    body.classList.add("locked");
  });
  close.addEventListener("click", () => {
    modal.style.display = "none";
    body.classList.remove("locked");
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      body.classList.remove("locked");
    }
  });
}

bindModal(".modal__btn", ".modal__wrapper", ".modal__close");

// DATABASE

// const mysql = require("mysql");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "test",
//   password: "",
// });
// connection.connect(function (err) {
//   if (err) {
//     return console.error("Ошибка");
//   } else {
//     console.log("Подключение к серверу MySQL успешно установлено");
//   }
// });

// Само задание

const btnLogin = document.querySelector(".login__submit");
const inputLogin = document.querySelector(".login__input");

btnLogin.addEventListener("click", () => {
  console.log(inputLogin.value);
});

