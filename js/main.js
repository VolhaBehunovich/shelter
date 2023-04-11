document.querySelector(".burger").addEventListener("click", function (event) {
  event.stopPropagation();
  this.classList.toggle("active");
  document.querySelector(".drop-down_menu").classList.toggle("active");
  document.querySelector(".drop-down").classList.toggle("active");
  document.querySelector(".blackout").classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

// Закрыть бургер-меню
document.addEventListener("click", function () {
  document.querySelector(".burger").classList.remove("active");
  document.querySelector(".drop-down_menu").classList.remove("active");
  document.querySelector(".drop-down").classList.remove("active");
  document.querySelector(".blackout").classList.remove("active");
  document.body.classList.remove("no-scroll");
});
