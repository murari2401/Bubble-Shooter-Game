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
    var rn=Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent=rn;
}
var timer=60;
function runTimer(){
    var timerInterval = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerValue").textContent=timer;
        }
        else{
            clearInterval(timer);
        }
    },1000);
}

runTimer();
makeBubble();
getNewHit();