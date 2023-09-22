function makebubble() {
    var clutter = "";

for(var i = 1; i<127; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}
makebubble();

// to run timer 
var timer = 60;
function runtimer(){
    var interval = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timervalue").textContent=timer;
    }
    else{
        clearInterval(interval);
        document.querySelector("#pbtm").innerHTML = `<h1> Game Over</h1>`;
    }
    }, 1000);
}
runtimer();

// to run hit
var hitrn = 0
function getNewHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}
getNewHit();

// make a score board
var score = 0;
function increasescore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
increasescore();

// refresing screen
document.querySelector("#pbtm").addEventListener("click",function(details){
    var clickedNumber = Number(details.target.textContent);
    if(clickedNumber === hitrn){
        increasescore();
        makebubble();
        getNewHit();

    }
});
// end screen

