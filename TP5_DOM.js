const button = document.getElementById("button");
let input = document.querySelector("input");
const submit = document.getElementById("submit");
const alert = document.getElementById("alert");
const show = document.getElementById("show");
const number = document.getElementById("number");

let num = "";

input.addEventListener("input", () => getInput());
button.addEventListener("click", () => startGame());
submit.addEventListener("click", (e) => play(e));

let startGame = () => {
  num = Math.floor(Math.random() * 10 + 1);
  console.log(num);
  show.innerText = "El número ya fue elegido.";
  number.classList.remove("d-none");
};

let play = (e) => {
  e.preventDefault();
  alert.innerText = "";
  if (parseInt(num) === parseInt(theInput)) {
    alert.innerText = "Adivinaste !!";
  } else if (parseInt(num) < parseInt(theInput)) {
    alert.innerText = "El número ingresado es mayor al número random";
  } else {
    alert.innerText = "El número ingresado es menor número random.";
  }
  show.innerText = "";
  input.value = "";
  number.classList.add("d-none");
};

let getInput = () => {
  theInput = document.querySelector("input").value;
  console.log(theInput);
};
