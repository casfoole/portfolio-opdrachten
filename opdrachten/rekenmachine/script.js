window.addEventListener("load",loaded,false);

function loaded(){
    var som = document.getElementById("som");
    var invoer = document.getElementById("invoer");
    var plaatje = document.getElementById("plaatje");
    var button = document.getElementById("button");
    var goedaantal = 0;
    var foutaantal = 0;
    goed.innerHTML = 'aantalfout '+ goedaantal;
    fout.innerHTML = 'aantalgoed '+ foutaantal;
    var goedfout = goedaantal + foutaantal;
    var a = Math.floor(Math.random()*9+1);
    var b = Math.floor(Math.random()*9+1);
    var opgave = a + " * " + b;
    var antwoord = (a * b)
    var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;


    function newsom(){
      a = Math.floor(Math.random()*9+1);
      b = Math.floor(Math.random()*9+1);
      opgave = a + " * " + b;
      antwoord = (a * b)
      som.innerHTML = opgave;
    }
    newsom();


    function clicked(){
        if(invoer.value == eval(opgave)){
            plaatje.src = "afb/giphy (1).gif";
            goedaantal++;
            goedfout = goedaantal + foutaantal;
            goed.innerHTML = 'aantalgoed '+ goedaantal;
        }
        else {
            plaatje.src = "afb/giphy1.gif";
            foutaantal++;
            goedfout = goedaantal + foutaantal;
            fout.innerHTML = 'aantalfout '+ foutaantal;
        
        }
        newsom();
        invoer.value = " ";
    }

    var wage = document.getElementById("invoer");
invoer.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
        clicked();
        console.log(goedfout);
        if (goedfout == 10){
            som.innerHTML="goed gedaan";
        }
    }
});
   
    function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();

start.onclick = timer;
    

stop.onclick = function() {
    clearTimeout(t);
}

clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}
}
