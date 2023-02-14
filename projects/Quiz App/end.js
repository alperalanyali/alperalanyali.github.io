const username = document.querySelector("#username");
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalscore');
const mostRecentScore = localStorage.getItem('monstRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScore')) || [];

const maxHighScore = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup',()=>{
	saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e)=>{
	e.preventDefault();

	const score = {
		score :mostRecentScore,
		name : username.value
	};

	highScores.push(score);
	highScores.sort((a,b)=>{
		return b.score - a.score
	});
	highScores.splice(5);
	localStorage.setItem('highScore',JSON.stringify(highScores));
	window.location.assign('/');
}