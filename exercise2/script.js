const person = [];
const button = document.getElementById("button");
const contenedor = document.getElementById("contenedor");
const show = document.getElementById("show");
const showGeneration = document.getElementById("showGeneration");
let inputSelect;
let generation;
let show2;

let inputAll = document.querySelectorAll(".input");
inputAll.forEach((input) => {
  input.addEventListener("change", () => getInput(input));
});

button.addEventListener("click", () => cargar());

let getInput = (input) => {
  inputSelect = input.value;
  person.push(inputSelect);
  //document.querySelector("input").value;
  console.log(inputSelect);
  console.log(person);
};

const cargar = () => {
  const datos = document.createElement("div");
  datos.innerHTML =
    /*HTML*/
    `<h5>Tus datos ingresados son: ${person}</h5>
    `;
  contenedor.appendChild(datos);
  show.className = "";
  generation = parseInt(person[4]);
  console.log(generation);
  if (generation > 1993 && generation <= 2010) {
    show2 = "Generación Z";
    showGeneration.innerText = `La generación a la que perteneces es: ${show2}`;
    console.log("Generación Z");
  } else if (generation > 1981 && generation <= 1994) {
    show2 = "Generación Y 'millenials'";
    showGeneration.innerText = `La generación a la que perteneces es: ${show2}`;
  } else if (generation > 1969 && generation <= 1980) {
    show2 = "Generación X'";
    showGeneration.innerText = `La generación a la que perteneces es: ${show2}`;
  } else if (generation > 1949 && generation <= 1968) {
    show2 = "Generación Baby Boom";
    showGeneration.innerText = `La generación a la que perteneces es: ${show2}`;
  } else {
    show2 = "Silent Generation";
    showGeneration.innerText = `La generación a la que perteneces es: ${show2}`;
  }
};
