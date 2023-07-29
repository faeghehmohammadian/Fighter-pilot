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
        console.log(tens);
        }
        if(tens>200 && tens<500){
            rectspeed=2;
        }
        if(tens>500&& tens<1500){
            rectspeed=3;
        }
        if(tens>1500 && tens<2500){
            rectspeed=4;
        }
        if(tens>2500 && tens<3000){
            rectspeed=5;
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
            rect.style.left =rect.offsetLeft +parseInt(rect.getAttribute("dx")) + "px";
            rect.style.top =rect.offsetTop + parseInt(rect.getAttribute("dy")) + "px";
            chengmovedir();
            Collisionsquare();
            
            if(rectspeed==2){
                if(rect.getAttribute('dx')>0)
                    rect.setAttribute('dx','1.5');
                if(rect.getAttribute('dx')<0)
                    rect.setAttribute('dx','-1.5');
                if(rect.getAttribute('dy')>0)
                    rect.setAttribute('dy','1.5');
                if(rect.getAttribute('dy')<0)
                    rect.setAttribute('dy','-1.5');
            }
            if(rectspeed==3){
                if(rect.getAttribute('dx')>0)
                    rect.setAttribute('dx','2');
                if(rect.getAttribute('dx')<0)
                    rect.setAttribute('dx','-2');
                if(rect.getAttribute('dy')>0)
                    rect.setAttribute('dy','2');
                if(rect.getAttribute('dy')<0)
                    rect.setAttribute('dy','-2');
            }
            if(rectspeed==4){
                if(rect.getAttribute('dx')>0)
                    rect.setAttribute('dx','2.5');
                if(rect.getAttribute('dx')<0)
                    rect.setAttribute('dx','-2.5');
                if(rect.getAttribute('dy')>0)
                    rect.setAttribute('dy','2.5');
                if(rect.getAttribute('dy')<0)
                    rect.setAttribute('dy','-2.5');
            }
            if(rectspeed==5){
                if(rect.getAttribute('dx')>0)
                    rect.setAttribute('dx','3');
                if(rect.getAttribute('dx')<0)
                    rect.setAttribute('dx','-3');
                if(rect.getAttribute('dy')>0)
                    rect.setAttribute('dy','3');
                if(rect.getAttribute('dy')<0)
                    rect.setAttribute('dy','-3');
            }
            console.log(rect.getAttribute('dx'));
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


