/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("hola");
};

let generateExcuse = () => {
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

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let avoidIndx = Math.floor(Math.random() * avoid.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subIndx] +
    " " +
    action[actIndx] +
    " " +
    avoid[avoidIndx] +
    " " +
    where[whereIndx]
  );
};
