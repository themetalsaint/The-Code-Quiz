// IT'S OVERWHELMING BUT IT'S OKAY. JUST BREATH. YOU GOT THIS

// A start button
// Questions & answers pop up
// I need questions on the page that change when answered.
// Buttons with answers that change.
// A function that determines right & wrong
// Keep track of scores (Local storage)
// A timer that runs out
// A form at the end that reflects scores and asked for initals
// A high scores tab that doesn't go away when refreshed
// Button to play again and clear high scores 





// For loop to check answers and move to next question?/

//**Code For Sound from class */
//const correctSound = new Audio("../sound/symphonic-slam-sound-effect.mp3");
//const incorrectSound = new Audio("../sound/punch-sound-effect.mp3"); 




//**Quiz Questions**

var questions = [
    {
    question: "How many elements can you apply an 'ID' attribute to?",
    options: [
     "As many as you want", "1", "6", "12", ],
    correctAnswer: "a"
    },

    {
    question: "What does DOM stand for?",
    options:["Document Object Model", "Display Object Management","Document Ordinance Model","Desktop Oriented Mode"],
    correctAnswer: "a"
    },

    {
    question: "What is used primarily to add styling to a web page?",
    options: ["HTML", "CSS", "Python","The Mouse",],
    correctAnswer: "b"},

    {
    question: "When is localStorage data cleared?",
    options: ["No expiration time","On page reload", "On browser close", "On computer restart",],
    correctAnswer: "a"
    },  

    {
    question: "What HTML attribute references an external JavaScript file?",
    options: ["href", "h1", "class", "src",],
    correctAnswer: "d"
    },

    {
    question: "What does WWW stand for?",
    options: ["Web World Workings", "Window World Web", "World Wide Web", "Winston Wants Waffles"],
    correctAnswer: "c"
    },
      
];  

//**Gather your pieces**
var quizTimer = document.getElementById("timer");
var quiz = document.getElementById("quizPage");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var start = document.getElementById("startpage");
var startBtn = document.getElementById("start");
var end = document.getElementById("endScreen");
var endButtons = document.getElementById("endButtons");
var answers = document.getElementById("answers");
var feedbackEl = document.querySelector("#feedback");
// var time = question.length * 12.5;
var score = 0;
// var startingTime = 76;
var timePenalty = 10;
var questionIndex = 0;



//Funtions I need:

function startGame(){
    start.classList.add("hidden");
    quizPage.classList.add("reveal")
    
    //start timer in here 
    // timerID = setInterval(tick, 1000);

    // //show starting time
    // timeEl.textContent = time;
    
    
    //call function (need new function see below) that shows questions
    showQuestions();


}

function tick(){
    //update timer
    time--;
    timeEl.textContent = time;

//     if(time<=0){
//         quizEnd();
//     }
}

function showQuestions(){
    var activeQuestion = questions[questionIndex];

    var triviaQuestion = document.getElementById("trivia");

    triviaQuestion.textContent = activeQuestion.question;

    answers.innerHTML = ""; //clears out old options


    activeQuestion.options.forEach(function(option, i){
        var optionBtns = document.createElement("button");
        optionBtns.setAttribute("value", option);
        // optionsBtns.setAttribute("class", "btn") btn class is for styling
        optionBtns.textContent = i + 1 + ". " + option;
        optionBtns.onclick = clickQuestions();


        answers.appendChild(optionBtns);

            }
        )
    }

function clickQuestions(){
 // check if user guessed wrong
 if (this.value !== questions[questionIndex].answer) {
    // penalize time
    time -= 10;

    if (time < 0) {
      time = 0;
    }

    // display new time on page
    timeEl.textContent = time;


    feedbackEl.textContent = "Wrong!";
  } else {

    feedbackEl.textContent = "Correct!";
  }

 // flash right/wrong feedback on page 
     feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    //Move on to next question
    questionIndex++;
    //Out of questions
    // if(questionIndex === questions.length) {
    //     quizEnd();
    // } else {
    //     showQuestions();
    //     }
    }







// replayGame()









// checkAnswers()







// showHighscores()








// clearHighscores()









// quizEnd()




startBtn.onclick = startGame;
