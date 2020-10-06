import {questions} from "./questions.js"; 

let correctAnswers = 0;
let amountOfQuestions = 0;
let answerData;

function checkAnswer(answer){

    let y = 0;
    for (let i = 0; i < answer.length; i++) {

        let correct = questions[y][1]; //Vi hiver vores korrekte index-placering ud 
        console.log("correct: " + correct);
        answerData = answer[i]; //Vi henter vores input ind - altså hver enkelt radiobutton
        
        if(answerData.checked){ //vi tjekker på, om radiobutton er markeret
            
            if(answerData.value == correct){
                correctAnswers++;
                console.log(correctAnswers); 
            }

            amountOfQuestions++;  
            console.log(amountOfQuestions);              
            y++;
        }

        if(amountOfQuestions == questions.length){
    
            if (amountOfQuestions == correctAnswers){
                alert("Du har svaret korrekt på alle spørgsmål"); 
            }
            else{
                alert(`Du har fået ${correctAnswers} rigtige ud af ${amountOfQuestions} spørgsmål.`);  
                
            }
        }

    }  

    
}

export{checkAnswer};