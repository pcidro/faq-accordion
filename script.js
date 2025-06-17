const pergunta = document.querySelectorAll(".js-accordion dt");

function callBackAccordion() {
  this.nextElementSibling.classList.toggle("ativo");
  this.classList.toggle("ativo");
}

pergunta.forEach((item) => {
  item.addEventListener("click", callBackAccordion);
});
