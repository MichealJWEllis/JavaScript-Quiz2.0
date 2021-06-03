const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const timer_h1 = document.getElementById('countdown');
let timeLeft = 59;


let questions = [
    {
        question: "What is the HTML tag under which one can write the JavaScript code?",
        choice1: "<javascript></javascript>",
        choice2: "<script></script>",
        choice3: "<js></js>",
        choice4: "<scripts></scripts>",
        answer: 2,
    },
    {
        question: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
        choice1: "alertbox(“GeeksforGeeks”);",
        choice2: "msg(“GeeksforGeeks”);",
        choice3: "msgbox(“GeeksforGeeks”);",
        choice4: "alert(“GeeksforGeeks”);",
        answer: 4,
    },
    {
        question: "What is the correct file extension for Javascript files?",
        choice1: ".java",
        choice2: ".js",
        choice3: ".javacript",
        choice4: ".script",
        answer: 2,
    },
    {
        question: "JavaScript is ________ language?",
        choice1: "an interpreted",
        choice2: "a compiled ",
        choice3: "translated",
        choice4: "None of the above",
        answer: 1,
    },
    {
        question: 'What is the difference between "==" and "==="?',
        choice1: "Both B & C",
        choice2: "Both operators are the same",
        choice3: '"==" checks only for equality in value whereas "===" is a stricter equality test',
        choice4: "None of the above",
        answer: 3,
    }
];

function startGame() {
    getQuestions()
    countdown()
};

function getQuestions() {
    var randomQues = Math.floor(Math.random() * questions.length)
    var currQuestion = questions[randomQues]
    question.innerText = currQuestion.question

    choices.forEach(choice => {
        const num = choice.dataset['number']
        choice.innerText = currQuestion['choice' + num]
    })

}

function countdown() {
    var timeInterval = setInterval(function () {

        if (timeLeft > 1) {
            timer_h1.innerHTML = ':' + timeLeft;
            timeLeft--;
        } else {
            timer_h1.innerHTML = '0:00';
            clearInterval(timeInterval);
            return window.location.assign("/endpage/end.html")
        }
    }, 1000)

}


startGame()