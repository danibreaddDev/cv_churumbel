/* Elementos del DOM*/
const aboutContainer = document.getElementById("sobreMi");
const curriculumContainer = document.getElementById("curriculum");
const portfolioContainer = document.getElementById("portfolio");
const btn_about = document.getElementById("btn_sobreMi");
const btn_curriculum = document.getElementById("btn_curriculum");
const btn_portfolio = document.getElementById("btn_portfolio");
console.log(aboutContainer);

/* constantes JS*/
/* Variabes JS*/
/* Funciones*/
function showContainer(showContainer, ocultContainer, ocultContainer2) {
  showContainer.style.display = "flex";
  ocultContainer.style.display = "none";
  ocultContainer2.style.display = "none";
}
function showColor(btn1, btn2, btn3) {
  btn1.style.color = " rgb(195, 223, 17)";
  btn2.style.color = "white";
  btn3.style.color = "white";
}
/* Eventos*/
btn_about.style.color = " rgb(195, 223, 17)";

btn_about.addEventListener("click", () => {
  showContainer(aboutContainer, curriculumContainer, portfolioContainer);
  showColor(btn_about, btn_curriculum, btn_portfolio);
});
btn_curriculum.addEventListener("click", () => {
  showContainer(curriculumContainer, aboutContainer, portfolioContainer);
  showColor(btn_curriculum, btn_portfolio, btn_about);
});
btn_portfolio.addEventListener("click", () => {
  showContainer(portfolioContainer, aboutContainer, curriculumContainer);
  showColor(btn_portfolio, btn_curriculum, btn_about);
});
