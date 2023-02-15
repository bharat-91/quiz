const question = document.getElementById('question');
const questionsCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
const choice = Array.from(document.getElementsByClassName('choice-text'));
const CORRECT_BONUS = 10;
const MAX_QUESTIONS= 3;

let currentQuestion = {};
let acceptingAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let questions = 
[
    {
        question:"Inside which HTML element do we put the JavaScript ?",
        choice1: "<script> </script>",
        choice2: "<Javascript> </Javascript>",
        choice3: "<js> </js>",
        choice4: "<Scripting></Scripting>",
        answer: 1
    },
    {
        question:"Capital of Inida ?",
        choice1: "Surat",
        choice2: "Ahemdabad",
        choice3: "Delhi",
        choice4: "Mumbai",
        answer: 3
    },
    {
        question:"Who among the following came to India first",
        choice1: "Babur",
        choice2: "Akbar",
        choice3: "Humayun",
        choice4: "Shah Jahan",
        answer: 1
    },
]

startGame = () =>
{
    questionCounter = 0;
    score = 0;
    availableQuestion = [...questions];
    getNewQuestions();
}
getNewQuestions = () =>
{
    if(availableQuestion.length === 0 || questionCounter >= MAX_QUESTIONS)
    {
        localStorage.setItem('mostRecentScore' , score);
        //go to end Page
       return window.location.assign('../HTML/index.html')
    }
    questionCounter++;

    questionsCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;
    
    const questionIndex =  Math.floor(Math.random() * availableQuestion.length)
    currentQuestion = availableQuestion[questionIndex];
    question.innerText = currentQuestion.question;

    choice.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
        
    });
    availableQuestion.splice(questionIndex ,1);
    acceptingAnswer = true;
}
choice.forEach(choice => 
    {
        choice.addEventListener('click' , e => 
        {
            if(!acceptingAnswer) return;

            acceptingAnswer = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset['number'];
             classToApply = 'incorrect';
            if(selectedAnswer == currentQuestion.answer)
            {
                classToApply = 'correct';
            }
               //TERNARY OPERATOR 
                // const classToApplys =selectedAnswer == currentQuestion.answer ? 'Correct' : 'Incorrect'; 
    
            if(classToApply === 'correct')
            {
                increamentScore(CORRECT_BONUS);
            }

            selectedChoice.parentElement.classList.add(classToApply);
            setTimeout(()=>
            {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestions();
            },650);
           
        })
    });
    
increamentScore = num =>
{
    score += num;
    scoreText.innerText = score;
}

startGame();