var timeEl = document.getElementById("time");
var quizEl = document.getElementById("quiz");
var startScreenEl = document.getElementById("startscreen");
var startEl = document.getElementById("start");
var questionEl = document.getElementById("question");
var aButton = document.getElementById("a");
var bButton = document.getElementById("b");
var cButton = document.getElementById("c");
var dButton = document.getElementById("d");
var resultEl = document.getElementById("result");
var scoreScreenEl = document.getElementById("scorescreen");
var finalScoreEl = document.getElementById("finalscore");
var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submitinitials");

// Global variable declaration
var interval;
var time;

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
        resultEl.textContent = "Correct!";
        nextQuestion();
    }
    else {
        resultEl.textContent = "Wrong!";
        time-=10;
        timeEl.textContent=time;
        nextQuestion();
    }
}

function nextQuestion() {
    if (currentIndex === questionArray.length-1) {
        clearInterval(interval);
        scoreScreen();
    }
    else {
        startScreenEl.style.display = "none";
        quizEl.style.display = "block";
        currentIndex +=1;
        question.textContent = questionArray[currentIndex]["question"];
        aButton.textContent = questionArray[currentIndex]["a"];
        bButton.textContent = questionArray[currentIndex]["b"];
        cButton.textContent = questionArray[currentIndex]["c"];
        dButton.textContent = questionArray[currentIndex]["d"];
        console.log(currentIndex);
    }
}

function startQuiz() {
    clearInterval(interval);
    timeEl.style.display = "block";
    time = 75;
    nextQuestion();
    interval = setInterval(function() {
        time--;
        timeEl.textContent = time;
        console.log(time);
        if (time<=0) {
            clearInterval(interval);
            scoreScreen();
        }
    }, 1000);
}

function scoreScreen () {
    quizEl.style.display = "none";
    scoreScreenEl.style.display = "block";
    timeEl.style.display = "none";
    finalScoreEl.textContent = "Final score is: "+time+".";
}

function highScores () {
    // 
}

startEl.addEventListener("click", startQuiz);
aButton.addEventListener("click", userChoice);
bButton.addEventListener("click", userChoice);
cButton.addEventListener("click", userChoice);
dButton.addEventListener("click", userChoice);
submitButton.addEventListener("click", function() {
    localStorage.setItem(initialsInput.value, time);
    highScores();
});