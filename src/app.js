/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#button1").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The "];
  let subject = ["jogger", "mailman", "artist", "barista", "actor"];
  let action = ["ate", "threw away", "sold", "destroyed", "sat on"];
  let possetion = ["homework", "car", "phone", "laptop"];
  let where = ["in the dumbster", "in my house", "out the window"];

  let pIndex = Math.floor(Math.random() * pronoun.length);
  let sIndex = Math.floor(Math.random() * subject.length);
  let aIndex = Math.floor(Math.random() * action.length);
  let poIndex = Math.floor(Math.random() * possetion.length);
  let wIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pIndex] +
    " " +
    subject[sIndex] +
    " " +
    action[aIndex] +
    " " +
    possetion[poIndex] +
    " " +
    where[wIndex]
  );
};
