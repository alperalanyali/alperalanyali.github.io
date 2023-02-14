const highScoreList = document.querySelector('#highScoresList');
const highScores =  JSON.parse(localStorage.getItem('highScore')) || [];

highScoreList.innerHTML = 
highScores.map( score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("");