'use strict';

import{questions} from './questions.js'; 

/*Funtion til at printe vores spørgsmål inkl. kategori og svarmuligheder*/
function printQuestions(arr){
    let question;
    let category;
    let questionText; 
    let categoryText;
    let main = document.getElementById('main');
    let optionLength;
    let optionText;
    let option;
    let label; 
    let radioName = 'q'; 
    
    for(let i = 0; i < arr.length; i++){  
        question = document.createElement('p');
        category = document.createElement('p');
        questionText = document.createTextNode(arr[i][0][0][0]);  //Vores spørgsmål
        categoryText = document.createTextNode(arr[i][0][0][1]); //Vores kategori
        question.appendChild(questionText);
        category.appendChild(categoryText);
        main.appendChild(question);
        main.appendChild(category);
        radioName += i; //Vi sætter et name for hver enkelt spørgsmål

        optionLength = arr[i][0][1].length; //Længden på arrayet med svarmuligheder
    
        for(let y = 0; y < optionLength; y++){
            optionText = document.createTextNode(arr[i][0][1][y]); //Vi henter svarmuligheden ud 
            label = document.createElement('label'); 
            label.appendChild(optionText); //Vores label bliver sat til at være svarmuligheden
            option = document.createElement('input'); //Vi laver en radiobutton
            option.setAttribute("type", "radio");  
            option.setAttribute("id", optionText);
            option.setAttribute("name", radioName); //Vi sætter name, sådan at man kun kan vælge en af mulighederne inden for samme kategori
            
            main.appendChild(option);
            main.appendChild(label);
        }

    }
}

printQuestions(questions);