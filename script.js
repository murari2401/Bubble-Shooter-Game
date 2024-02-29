var timer=60;
var score=0;
var hitrn=0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreVal").textContent=score;
}

function makeBubble(){
    var clutter="";
    for(var i=1;i<=168+16;i++)
    {
        var rn=Math.floor(Math.random()*10);
        clutter+=`<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML=clutter;
}

function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent=hitrn;
}
function runTimer(){
    var timerInterval = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerValue").textContent=timer;
        }
        else{
            clearInterval(timerInterval);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over. <br> Your Score is ${score}</h1>`;
        }
    },1000);
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    // console.log(dets.target.textContent);
    var clickerNumner= Number(dets.target.textContent);
    if(clickerNumner==hitrn)
    {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

runTimer();
makeBubble();
getNewHit();