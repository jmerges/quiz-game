var viewHighScores = document.getElementById("viewhighscores");
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
var highScoreEl = document.getElementById("highscores");
var highScoreList = document.getElementById("highscorelist");
var goBackButton = document.getElementById("goback");
var clearButton = document.getElementById("clearhighscores");

// Global variable declaration
var interval;
var time;

// This array stores the questions and the choices
var questionArray = [
    {
        "question": "How often should you commit to Github?",
        "a": "Early and often.",
        "b": "Every keystroke.",
        "c": "Once.",
        "d": "Never.",
    },
    {
        "question": "Should you comment your code?",
        "a": "Only on tuesdays.",
        "b": "Blarg.",
        "c": "No.",
        "d": "Yes.",
    },
    {
        "question": "When you want to iterate over a set length object, a _____ should be used.",
        "a": "If statement.",
        "b": "Math.random().",
        "c": "For loop.",
        "d": "While loop.",
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
        setTimeout(function () {
            resultEl.textContent = "";
        }, 1000);
        nextQuestion();
    }
    else {
        resultEl.textContent = "Wrong!";
        setTimeout(function () {
            resultEl.textContent = "";
        }, 1000);
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
    clearInterval(interval);
    timeEl.textContent = 75;
    timeEl.style.display = "none";
    highScoreList.innerHTML = "";
    startScreenEl.style.display = "none";
    quizEl.style.display = "none";
    scoreScreenEl.style.display = "none";
    highScoreEl.style.display = "block";
    var currentMax = parseInt(localStorage.getItem(localStorage.key(0)));
    for (var i=0; i<localStorage.length; i++) {
        var li = document.createElement("li");
        li.textContent = localStorage.key(i)+" - "+localStorage.getItem(localStorage.key(i));
        highScoreList.appendChild(li);
    }
}

viewHighScores.addEventListener("click", highScores);
startEl.addEventListener("click", startQuiz);
aButton.addEventListener("click", userChoice);
bButton.addEventListener("click", userChoice);
cButton.addEventListener("click", userChoice);
dButton.addEventListener("click", userChoice);
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem(initialsInput.value, time);
    highScores();
});
goBackButton.addEventListener("click", function () {
    startScreenEl.style.display = "block";
    quizEl.style.display = "none";
    scoreScreenEl.style.display = "none";
    highScoreEl.style.display = "none";
    currentIndex=-1;
});
clearButton.addEventListener("click", function() {
    localStorage.clear();
    highScores();
});