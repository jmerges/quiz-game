var aButton = document.getElementById("a");
var bButton = document.getElementById("b");
var cButton = document.getElementById("c");
var dButton = document.getElementById("d");

// This array stores the questions and the choices
var questionArray = [
    {
        "question": "Question1",
        "a": "question1a",
        "b": "question1b",
        "c": "question1c",
        "d": "question1d",
    }
    {
        "question": "Question2",
        "a": "question2a",
        "b": "quesiton2b",
        "c": "question2c",
        "d": "question2d",
    }
    {
        "question": "Question3",
        "a": "question3a",
        "b": "question3b",
        "c": "question3c",
        "d": "question3d",
    }
]
var currentIndex = 0;

var initalTime = 75;


var correctChoice = "a";

function userChoice (event) {
    var answer = event.target.id;
    if (answer===correctChoice) {
        nextQuestion();
    }
    else {
        time-=10;
    }
}

function nextQuestion() {
    currentIndex +=1;
}