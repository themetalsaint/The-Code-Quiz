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




//Funtions I need:
// startGame()
// replayGame()
// showHighscores
// clearHighscores()
// checkAnswers()

// For loop to check answers and move to next question?/

//**Code For Sound from class */
//const correctSound = new Audio("../sound/symphonic-slam-sound-effect.mp3");
//const incorrectSound = new Audio("../sound/punch-sound-effect.mp3"); 




//**Quiz Questions**
var questions = [
    {
    question: "How many elements can you apply an 'ID' attribute to?",
    choiceA: "As many as you want",
    choiceB: "1",
    choiceC: "6",
    choiceD: "12",
    correctAnswer: "a"},
    {
    question: "What does DOM stand for?",
    choiceA: "Document Object Model",
    choiceB: "Display Object Management",
    choiceC: "Document Ordinance Model",
    choiceD: "Desktop Oriented Mode",
    correctAnswer: "a"},
    {
    question: "What is used primarily to add styling to a web page?",
    choiceA: "HTML",
    choiceB: "CSS",
    choiceC: "Python",
    choiceD: "The Mouse",
    correctAnswer: "b"},
    {
    question: "When is localStorage data cleared?",
    choiceA: "No expiration time",
    choiceB: "On page reload",
    choiceC: "On browser close",
    choiceD: "On computer restart",
    correctAnswer: "a"},  
    {
    question: "What HTML attribute references an external JavaScript file?",
    choiceA: "href",
    choiceB: "h1",
    choiceC: "class",
    choiceD: "src",
    correctAnswer: "d"},
    {
    question: "What does WWW stand for?",
    choiceA: "Web World Workings",
    choiceB: "Window World Web",
    choiceC: "World Wide Web",
    choiceD: "Winston Wants Waffles",
    correctAnswer: "c"},
      
];  

//**Gather your pieces**
var quizTimer = document.getElementById("timer")
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var start = document.getElementById("startpage")
var end = document.getElementById("loseScreen")
var endButtons = document.getElementById("endButtons")
var score = 0
var startingTime = 76
var timePenalty = 10


