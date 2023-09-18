var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
const dom=document.querySelectorAll(".dom");
var redsquare = document.querySelector('.Square'), 
x = 0, 
y = 0, 
mousedown = false; 

var tens=0;
var sec=0;
var gamestart=true;
var rec;
var rectspeed=0;

function startTimer () {
    if(gamestart){
        tens++;
        if(tens<100)
        appendTens.innerHTML = tens;
        if(tens>100){
        appendSeconds.innerHTML=Math.round(tens/100);
        appendTens.innerHTML = tens%100;      
        }
        if(tens>100 && tens<600){
            rectspeed=1;
        }
        if(tens>600 && tens<1200){
            rectspeed=2;
        }
        if(tens>1200 && tens<2000){
            rectspeed=3;
        }
        if(tens>2000 && tens<3000){
            rectspeed=4;
        }
}
}
function gameover(){
    gamestart=false;
    alert(`You survived ${appendSeconds.innerHTML+":"+appendTens.innerHTML} Seconds`);
    window.location.reload();
}

function Collisiontobox(left,top){
    if( left>270 || left<0 || top>370 || top<0){
        gameover();
        }
}
function Collisionsquare(){
    dom.forEach(rect =>{
        if (redsquare.offsetLeft <= rect.offsetLeft + rect.offsetWidth  && 
                redsquare.offsetLeft + redsquare.offsetWidth  >= rect.offsetLeft &&
                redsquare.offsetTop <= rect.offsetTop + rect.offsetHeight && 
                redsquare.offsetTop + redsquare.offsetHeight >= rect.offsetTop && gamestart){
            gameover();}
    });
}

function chengmovedir(){
    dom.forEach(rect =>{
        
        if(rect.offsetLeft +rect.offsetWidth> 300){
            if(rect.getAttribute('dx')>0)
                rect.setAttribute('dx',-1*rect.getAttribute('dx'));
        }
        if(rect.offsetLeft<1){
            if(rect.getAttribute('dx')<0)
                rect.setAttribute('dx',-1*rect.getAttribute('dx'));
        }
        if(rect.offsetTop + rect.offsetHeight > 400 ){
            if(rect.getAttribute('dy')>0)
                rect.setAttribute('dy',-1*rect.getAttribute('dy'));
        }
        if(rect.offsetTop<1){
            if(rect.getAttribute('dy')<0)
            rect.setAttribute('dy',-1*rect.getAttribute('dy'));
    }
    
    });
}
function moverect(){
    if(gamestart){
        dom.forEach(rect =>{
            rect.style.left =rect.offsetLeft +parseFloat(rect.getAttribute("dx")) + "px";
            rect.style.top =rect.offsetTop + parseFloat(rect.getAttribute("dy")) + "px";
            chengmovedir();
            const speedArray=[1.2,1.4,1.5,1.6,1.7];
            for(let i in speedArray){
                if(rectspeed==i){
                    if(rect.getAttribute('dx')>0)
                        rect.setAttribute('dx',speedArray[i]);
                    if(rect.getAttribute('dx')<0)
                        rect.setAttribute('dx',-1*speedArray[i]);
                    if(rect.getAttribute('dy')>0)
                        rect.setAttribute('dy',speedArray[i]);
                    if(rect.getAttribute('dy')<0)
                        rect.setAttribute('dy',-1*speedArray[i]);
                }
            }
        });
        
    }}

redsquare.addEventListener('mousedown', function (e) { 
    e.preventDefault();
    gamestart=true;
    var Interval ; 
    clearInterval(rec);
    rec=setInterval(moverect,10) ;
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10); 
    mousedown = true;  
    x = redsquare.offsetLeft - e.clientX; 
    y = redsquare.offsetTop - e.clientY; 
}); 

redsquare.addEventListener('mousemove', function (e) { 
    e.preventDefault();
    gamestart=true;
    if (mousedown && gamestart) { 
        redsquare.style.left = e.clientX + x  ; 
        redsquare.style.top = e.clientY + y ; 
        Collisiontobox(redsquare.offsetLeft,redsquare.offsetTop);
    }
    
});  