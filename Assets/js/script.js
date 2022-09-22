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
var timerEl = document.getElementById('time')

var time = questions * 15;
var score = 0;
var questionIndex = 0;
var timerEl;


//sounds
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");


function startGame(){
    var startScreenEl = document.getElementById("startpage");
    startScreenEl.setAttribute("class", "hide");
    
    quiz.removeAttribute("class");
    timerId = setInterval(tick, 1000);
    // timerEl.textContent = time;
    
    
    showQuestions();


}

function showQuestions(){
    var activeQuestion = questions[questionIndex];

    var triviaQuestion = document.getElementById("trivia");

    triviaQuestion.textContent = activeQuestion.question;

    answers.innerHTML = ""; 


    activeQuestion.options.forEach(function(option, i){
        var optionBtns = document.createElement("button");
        optionBtns.setAttribute("value", option);
        optionsBtns.setAttribute("class", "btn") //btn class is for styling
        optionBtns.textContent = i + 1 + ". " + option;
        optionBtns.onclick = clickQuestions();


        answers.appendChild(optionBtns);

            }
        )
    }

function clickQuestions(){
 
 if (this.value !== questions[questionIndex].answer) {
    time -= 10;

    if (time < 0) {
      time = 0;
    }

    timeEl.textContent = time;

    sfxWrong.play(); //Incorrect Music
    feedbackEl.textContent = "Wrong!";
  } else {

    sfxRight.play(); //Correct Music
    feedbackEl.textContent = "Correct!";
  }

     feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    //Move on to next question
    questionIndex++;
    //Out of questions
    if(questionIndex === questions.length) {
         quizEnd();
     } else {
         showQuestions();
         }
    }

function quizEnd(){
    clearInterval(timer)
}

function tick(){
    //update timer
    // time--;
    // timeEl.textContent = time;

//     if(time<=0){
//         quizEnd();
//     }
}


function saveHighscore() {

    var initials = initialsEl.value.trim();

    if (initials !== '') {

      var highscores =
        JSON.parse(window.localStorage.getItem('highscores')) || [];
  
      var newScore = {
        score: time,
        initials: initials,
      };
  
      highscores.push(newScore);
      window.localStorage.setItem('highscores', JSON.stringify(highscores));
  
      window.location.href = 'highscores.html';
    }
  }

// replayGame()



// checkAnswers()


// showHighscores()


// clearHighscores()



// submitBtn.onclick = saveHighscore;



startBtn.onclick = startGame;

// initialsEl.onkeyup = checkForEnter;