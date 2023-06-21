const person = [];
const button = document.getElementById("button");
const contenedor = document.getElementById("contenedor");
const show = document.getElementById("show");
let inputSelect;
let generation;

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
    `<h5>Tus datos ingresados son: ${person} </h5> 
     <p>La generación a la que perteneces es: `;
  contenedor.appendChild(datos);
  show.className = "";
  generation = Number(person[4]);
  console.log(generation);
  if (1993 < generation <= 2010) {
    console.log("Generación Z");
  } else if (1981 < generation <= 1994) {
    console.log("Generación X 'millenials'");
  } else if (1969 < generation <= 1980) {
    console.log("Generación ..");
  }
};
