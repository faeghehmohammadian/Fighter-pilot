const mySquare=document.getElementById('Square'); 
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var lefttopsquare=document.querySelector(".left-top-square");
var righttopsquare=document.querySelector(".right-top-square");
var leftbottonsquare=document.querySelector(".left-bottom-square");
var rightbottomsquare=document.querySelector(".right-bottom-square");
var div = document.querySelector('.Square'), 
        x = 0, 
        y = 0, 
        mousedown = false; 

var tens=0;
var sec=0;
var gamestart=true;

function startTimer () {
    if(gamestart){
        tens++;
        if(tens<100)
        appendTens.innerHTML = tens;
        if(tens>100){
        appendSeconds.innerHTML=Math.round(tens/100);
        appendTens.innerHTML = tens%100;
        }
        
    }
}

function Collisiontobox(xs,ys){
    if( xs>270 || xs<0 || ys>370|| ys<0){
        gameover();
        }
};

function gameover(){
    gamestart=false;
    alert(`You survived ${appendSeconds.innerHTML+":"+appendTens.innerHTML} Seconds`);
    window.location.reload();
};
 // div event mousedown 
div.addEventListener('mousedown', function (e) { 
    gamestart=true;
    var Interval ; 
    var rec;   
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    clearInterval(rec);
    rec=setInterval(moverect,1000) ;
    // mouse state set to true 
    mousedown = true; 
    // subtract offset 
    x = div.offsetLeft - e.clientX; 
    y = div.offsetTop - e.clientY; 
    
}, true); 

// var rec;  
// rec=setInterval(moverect,1000) ;
// div event mouseup 
// div.addEventListener('mouseup', function (e) { 
//     // mouse state set to false 
//     mousedown = false; 
// }, true); 

mySquare.addEventListener('mousemove', function (e) { 
    e.preventDefault()
    gamestart=true;
    // Is mouse pressed 
    if (mousedown && gamestart) { 
        // Now we calculate the difference upwards 
        div.style.left = e.clientX + x  ; 
        div.style.top = e.clientY + y ; 
        
        Collisiontobox(div.offsetLeft,div.offsetTop);
    }
    
}, true);  
function moverect(){
    if(gamestart){
    lefttopsquare.style.left =lefttopsquare.offsetLeft + 1 + "px";
    lefttopsquare.style.top =lefttopsquare.offsetTop + 1 + "px";
    Collisionsquare(div,lefttopsquare);
    if(Collisionsquare(div,lefttopsquare)){
        mousedown=false;
        gamestart=false;
        gameover();
    }
    righttopsquare.style.left =righttopsquare.offsetLeft - 5 + "px";
    righttopsquare.style.top =righttopsquare.offsetTop + 5 + "px";

    leftbottonsquare.style.left =leftbottonsquare.offsetLeft + 5 + "px";
    leftbottonsquare.style.top =leftbottonsquare.offsetTop - 5 + "px";

    rightbottomsquare.style.left =rightbottomsquare.offsetLeft - 5 + "px";
    rightbottomsquare.style.top =rightbottomsquare.offsetTop - 5 + "px";
    console.log("div: "+div.offsetLeft,div.offsetTop);
    console.log("rect: "+lefttopsquare.offsetLeft,lefttopsquare.offsetTop)
    }
}
var styles_applied = window.getComputedStyle(lefttopsquare);
var widthlefttop=parseInt(styles_applied.width);
var heightlefttop=parseInt(styles_applied.height);

function Collisionsquare(eldiv,elrect){
    return !(
        eldiv.offsetLeft>elrect.offsetLeft+widthlefttop ||
        eldiv.offsetLeft+30<elrect.offsetLeft ||
        eldiv.offsetTop>elrect.offsetTop+heightlefttop ||
        eldiv.offsetTop+30<elrect.offsetTop  )
        // console.log(eldiv.offsetLeft,eldiv.offsetTop);
    //     {
    //     gameover();
    //     gamestart=false;
    // }
}