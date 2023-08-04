/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let frase = excusa();
  console.log(frase);
  let html = document.getElementById("excuse");
  html.innerHTML = frase;
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function excusa() {
  let whoI = getRandomIntInclusive(0, who.length - 1);
  let actionI = getRandomIntInclusive(0, action.length - 1);
  let whatI = getRandomIntInclusive(0, what.length - 1);
  let whenI = getRandomIntInclusive(0, when.length - 1);
  let frase =
    who[whoI] + " " + action[actionI] + " " + what[whatI] + " " + when[whenI];
  console.log(whoI);
  return frase;
}

// let whoI = who[Math.floor(Math.random() * who.lenght)];
// let actionI = action[Math.floor(Math.random() * action.lenght)];
// let whatI = what[Math.floor(Math.random() * what.lenght)];
// let whenI = when[Math.floor(Math.random() * when.lenght)];
// let frasefinal = whoI + " " + actionI + " " + whatI + " " + whenI;
