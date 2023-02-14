const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choices-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const  progresssBarFull = document.querySelector('#progressBarFull');
console.log(choices);
let currentQuestion ={};
let  acceptingAnswer = true;
let score = 0;
let questionCounter = 1;
let avaliableQuestions = [];

let questions = [
    {
        question:"What is 5  + 3 ?",
        choice1: '1',
        choice2: '4',
        choice3: '8',
        choice4: '10',
        answer: 3
    },
    {
        question:"Inside which HTML element do we put the JavaScript?",
        choice1:"<script>",
        choice2:"<javascript>",
        choice3:"<scripting>",
        choice4:"<js>",
        answer:1
    },
    {
        question:`What is the correct JavaScript syntax to change the content of the HTML element below?
                <p id="demo">This is a demonstration.</p>` ,
        choice1:` document.getElementByName("p").innerHTML = "Hello World!";`,
        choice2:` #demo.innerHTML = "Hello World!";`,
        choice3:` document.getElement("p").innerHTML = "Hello World!";`,
        choice4:` document.getElementById("demo").innerHTML = "Hello World!";`,
        answer:1
    },
    {
        question:"Which type of JavaScript language is ___",
        choice1:"Object-Oriented",
        choice2:"Object-Based",
        choice3:"Assembly-language",
        choice4:"High-level",
        answer:2
    },
    {
        question:"Which one of the following also known as Conditional Expression:",
        choice1:"Alternative to if-else",
        choice2:"Switch statement",
        choice3:"If-then-else statement",
        choice4:"immediate if",
        answer:4
    }
]

const SCORE_POINTS = 10;
const MAX_QUESTIONS = 4;

startGame = ()=>{
    questionCounter = 0;
    score = 0;
    avaliableQuestions =  [...questions];
    getNewQuestion()
}


getNewQuestion = ()=>{
    if(avaliableQuestions.length === 0 || questionCounter >MAX_QUESTIONS ){
        localStorage.setItem("monstRecentScore",score);
        return window.location.assign('./end.html');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progresssBarFull.style.width = `${(questionCounter/MAX_QUESTIONS)* 100}%`;

    const questionIndex = Math.floor(Math.random() * avaliableQuestions.length);
    currentQuestion = avaliableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    choices.forEach(choice =>{
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion['choice'+number]
    });
    avaliableQuestions.splice(questionIndex,1);
    acceptingAnswer = true;
}

choices.forEach(choice => {
    choice.addEventListener('click',(e)=>{
        if(!acceptingAnswer){
            return ;
        }
        acceptingAnswer = false;    
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS);
        }
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    })
});

incrementScore = (num)=>{
  score +=num;
  scoreText.innerText = score; 
}
startGame();