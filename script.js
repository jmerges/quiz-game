var quiz = document.getElementById("quiz");
var startScreen = document.getElementById("startscreen");
var questionEl = document.getElementById("question");
var aButton = document.getElementById("a");
var bButton = document.getElementById("b");
var cButton = document.getElementById("c");
var dButton = document.getElementById("d");
var result = document.getElementById("result");

// This array stores the questions and the choices
var questionArray = [
    {
        "question": "Question1",
        "a": "question1a",
        "b": "question1b",
        "c": "question1c",
        "d": "question1d",
    },
    {
        "question": "Question2",
        "a": "question2a",
        "b": "quesiton2b",
        "c": "question2c",
        "d": "question2d",
    },
    {
        "question": "Question3",
        "a": "question3a",
        "b": "question3b",
        "c": "question3c",
        "d": "question3d",
    }
];

var correctArray = ["a", "d", "c"];

// start index at -1, will become 0 when first question is displayed
var currentIndex = -1;

var initalTime = 75;


var correctChoice = "a";

function userChoice (event) {
    var answer = event.target.id;
    if (answer===correctArray[currentIndex]) {
        result.textContent = "Correct!";
        nextQuestion();
    }
    else {
        result.textContent = "Wrong!";
        // time-=10;
        nextQuestion();
    }
}

function nextQuestion() {
    if (currentIndex === questionArray.length-1) {
// TODO: scorescreen
    }
    else {
        startScreen.style.display = "none";
        quiz.style.display = "block";
        currentIndex +=1;
        question.textContent = questionArray[currentIndex]["question"];
        aButton.textContent = questionArray[currentIndex]["a"];
        bButton.textContent = questionArray[currentIndex]["b"];
        cButton.textContent = questionArray[currentIndex]["c"];
        dButton.textContent = questionArray[currentIndex]["d"];
        console.log(currentIndex);
    }
}

startScreen.addEventListener("click", nextQuestion);
aButton.addEventListener("click", userChoice);
bButton.addEventListener("click", userChoice);
cButton.addEventListener("click", userChoice);
dButton.addEventListener("click", userChoice);