score = 0;
cross = true;
audiogo = new Audio('gameover.mp3');
document.onkeydown = function (e){
    console.log(e.keyCode);
    if(e.keyCode == 38){
        //console.log('UP');
        dino = document.querySelector('.dino');
        dino.classList.add("animateDino");
        setTimeout(()=>{
            dino.classList.remove('animateDino');
        },1000)
    } 
    if (e.keyCode == '39'){
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left = dinoX + 112 +"px";
        //console.log(dinoX);
    }
    if (e.keyCode == '37'){
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left = dinoX - 112 +"px";
    //    console.log(dinoX);
    }
    if(e.keyCode == '13'){
        location.reload();
    }
    //right : 39
}
setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver'); 
    obstacle = document.querySelector(".obstacle");

    dx =  parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("top"));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    //console.log(offsetX,offsetY);
    if(offsetX < 93 && offsetY <52){
        gameOver.innerHTML = "Game Over \nPress Enter";
        obstacle.classList.remove('obstaclAn'); 
        audiogo.play();
        setTimeout(()=>{
            audiogo.pause()
        },1000)       
    }else if(offsetX < 145 && cross) {
            score+=1;
            updateScore(score);
            cross = false;
            setTimeout(() => {
                cross = true;
            }, 1000);
            setTimeout(() => {
                animDur =  parseFloat(window.getComputedStyle(dino,null).getPropertyValue('animation-duration'));
                newDur = animDur - 0.1;
                obstacle.style.animationDuration = newDur+'s';
            }, 500);

    }
    
}, 100);

function updateScore(score){
    scoreCount  = document.querySelector("#scoreCount");
    scoreCount.innerHTML = "Your Score: "+score;    
}