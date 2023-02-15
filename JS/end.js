const username = document.getElementById('username');
const saveScoreButtom = document.getElementById('saveScoreButton');
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementById('finalScore');

const highScore = JSON.parse(localStorage.getItem('highScore')) || [];
const 
console.log(highScore);

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', ()=>
{
    console.log(username.value);
    saveScoreButtom.disabled = !username.value;
})

svingHighScore = e =>
{
    e.preventDefault();
    const score = 
    {
        score: mostRecentScore,
        name: username.value
    }
    highScore.push(score);

    highScore.sort((a,b) => b.sort - a.sort);

    console.log(highScore);
}