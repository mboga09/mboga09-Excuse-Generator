/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

//Generar nueva excusa mendiante escuchador de eventos
window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("hola");
};

let generateExcuse = () => {
  //Arreglos que contienen las partes que forman la excusa
  let pronoun = ["A", "The", "My"];
  let subject = [
    "dog",
    "cat",
    "racoon",
    "mouse",
    "brother",
    "yigüirro",
    "monkey",
    "cow"
  ];
  let action = [
    "ate my",
    "threw away my",
    "yelled at my",
    "took my",
    "stole my",
    "destroyed my",
    "attacked my"
  ];
  let avoid = [
    "homework",
    "train ticket",
    "computer",
    "phone",
    "car",
    "shoes",
    "food",
    "calculator",
    "backpack"
  ];
  let where = [
    "yesterday",
    "at my house",
    "at university",
    "at the mall",
    "on the street"
  ];

  //Asignacion de índice random
  let pronounIndx = Math.floor(Math.random() * pronoun.length);
  let subjectIndx = Math.floor(Math.random() * subject.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let avoidIndx = Math.floor(Math.random() * avoid.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  //Concatenación para formar excusa
  return (
    pronoun[pronounIndx] +
    " " +
    subject[subjectIndx] +
    " " +
    action[actionIndx] +
    " " +
    avoid[avoidIndx] +
    " " +
    where[whereIndx]
  );
};
