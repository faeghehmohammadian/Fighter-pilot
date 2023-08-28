const mySquare=document.getElementById('Square'); 
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
const dom=document.querySelectorAll(".dom");
var div = document.querySelector('.Square'), 
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
        if(tens>100 && tens<800){
            rectspeed=1;
        }
        if(tens>800&& tens<1500){
            rectspeed=2;
        }
        if(tens>1500 && tens<2000){
            rectspeed=3;
        }
        if(tens>2000 && tens<3000){
            rectspeed=4;
        }
}
}

function Collisiontobox(xs,ys){
    if( xs>270 || xs<0 || ys>370|| ys<0){
        gameover();
        }
}
function Collisionsquare(){
    dom.forEach(rect =>{
        if (div.offsetLeft <= rect.offsetLeft + rect.offsetWidth  && 
                div.offsetLeft + div.offsetWidth  >= rect.offsetLeft &&
                div.offsetTop <= rect.offsetTop + rect.offsetHeight && 
                div.offsetTop + div.offsetHeight >= rect.offsetTop && gamestart){
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
            if(rect.getAttribute('dx')>0)
                rect.setAttribute('dx',-1*rect.getAttribute('dx'));
    
            if(rect.getAttribute('dx')<0)
                rect.setAttribute('dx',-1*rect.getAttribute('dx'));
        }
        if(rect.offsetTop + rect.offsetHeight > 400 ){
            if(rect.getAttribute('dy')>0)
                rect.setAttribute('dy',-1*rect.getAttribute('dy'));
        }
        if(rect.offsetTop<1){
            if(rect.getAttribute('dy')>0)
                rect.setAttribute('dy',-1*rect.getAttribute('dy'));

            if(rect.getAttribute('dy')<0)
            rect.setAttribute('dy',-1*rect.getAttribute('dy'));
    }
    
    });
}
function moverect(){
    if(gamestart){
        //console.log(div.offsetTop)
        dom.forEach(rect =>{
            rect.style.left =rect.offsetLeft +parseFloat(rect.getAttribute("dx")) + "px";
            rect.style.top =rect.offsetTop + parseFloat(rect.getAttribute("dy")) + "px";
            chengmovedir();
            Collisionsquare();
            const speedArray=[1.2,1.4,1.5,1.6];

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
            console.log(rect.style.left,rect.style.left);
        });
        
    }}

function gameover(){
    gamestart=false;
    alert(`You survived ${appendSeconds.innerHTML+":"+appendTens.innerHTML} Seconds`);
    window.location.reload();
}
 // div event mousedown 
div.addEventListener('mousedown', function (e) { 
    e.preventDefault();
    gamestart=true;
    var Interval ; 
    clearInterval(rec);
    rec=setInterval(moverect,10) ;
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    // mouse state set to true 
    mousedown = true; 
    // subtract offset 
    x = div.offsetLeft - e.clientX; 
    y = div.offsetTop - e.clientY; 
    
}, true); 

mySquare.addEventListener('mousemove', function (e) { 
    e.preventDefault();
    
    gamestart=true;
    // Is mouse pressed 
    if (mousedown && gamestart) { 
        // Now we calculate the difference upwards 
        div.style.left = e.clientX + x  ; 
        div.style.top = e.clientY + y ; 
        Collisiontobox(div.offsetLeft,div.offsetTop);
        
    }
    
}, true);  