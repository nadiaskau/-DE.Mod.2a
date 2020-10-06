"use strict";

import { questions } from "./questions.js";
import { checkAnswer } from "./checkAnswers.js";

console.log("quiz.js answer");

/*Funtion til at printe vores spørgsmål inkl. kategori og svarmuligheder*/
function printQuestions(arr) {
  let question;
  let category;
  let questionText;
  let categoryText;
  let quizForm = document.getElementById("quizForm");
  let optionLength;
  let labelText;
  let option;
  let label;
  let radioName;
  let radioID;
  let radioCounter = 0;
  let submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("id", "submitButton");
  submit.setAttribute("name", "submitButton");
  submit.style.display = "block";
  submit.style.marginTop = "3%";

  for (let i = 0; i < arr.length; i++) {
    question = document.createElement("p");
    category = document.createElement("p");
    questionText = document.createTextNode(arr[i][0][0][0]); //Vores spørgsmål
    categoryText = document.createTextNode(arr[i][0][0][1]); //Vores kategori
    question.appendChild(questionText);
    category.appendChild(categoryText);
    quizForm.appendChild(category);
    quizForm.appendChild(question);
    radioName = "q";
    radioName += i; //Vi sætter et name for hver enkelt spørgsmål

    optionLength = arr[i][0][1].length; //Længden på arrayet med svarmuligheder

    for (let y = 0; y < optionLength; y++) {
      //optionText = arr[i][0][1][y]; //Vi henter svarmuligheden ud
      labelText = document.createTextNode(arr[i][0][1][y]); //Vi henter svarmuligheden ud
      label = document.createElement("label");
      label.appendChild(labelText); //Vores label bliver sat til at være svarmuligheden
      option = document.createElement("input"); //Vi laver en radiobutton
      option.setAttribute("type", "radio");
      radioID = "r"; //Vi giver hver enkelt radiobutton eget id
      radioID += radioCounter; //vi lægger tallet til
      radioCounter++; //vi lader tallet vokse
      option.setAttribute("id", radioID);
      option.setAttribute("value", y);
      option.setAttribute("name", radioName); //Vi sætter name, sådan at man kun kan vælge en af mulighederne inden for samme kategori

      quizForm.appendChild(option);
      quizForm.appendChild(label);
    }
  }

  quizForm.appendChild(submit);
  quizForm.addEventListener("submit", function () {
    checkAnswer(quizForm);
  });
}

printQuestions(questions);
