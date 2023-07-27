const mySquare=document.getElementById('Square'); 
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
// var lefttopsquare=document.querySelector(".left-top-square");
// var righttopsquare=document.querySelector(".right-top-square");
// var leftbottonsquare=document.querySelector(".left-bottom-square");
// var rightbottomsquare=document.querySelector(".right-bottom-square");
const dom=document.querySelectorAll(".dom");


var div = document.querySelector('.Square'), 
        x = 0, 
        y = 0, 
        mousedown = false; 

var tens=0;
var sec=0;
var gamestart=true;
var rec;
var rectspeed=10;

function startTimer () {
    if(gamestart){
        tens++;
        if(tens<100)
        appendTens.innerHTML = tens;
        if(tens>100){
        appendSeconds.innerHTML=Math.round(tens/100);
        appendTens.innerHTML = tens%100;
        }
        if(tens>500 && tens<0){
            rectspeed=2;
            
        }
        if(tens>500&& tens<1000){
            rectspeed=3;
            
        }
        if(tens>1000 && tens<1500){
            rectspeed=4;
            
        }
        if(tens>1500 && tens<2000){
            rectspeed=5;
            
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

// var rec;  
// rec=setInterval(moverect,1000) ;
// div event mouseup 
// div.addEventListener('mouseup', function (e) { 
//     // mouse state set to false 
//     mousedown = false; 
// }, true); 

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
            // if(rect.getAttribute("dy") == 1)
            //     rect.setAttribute("dy","-1");
            // if(rect.getAttribute("dy") == -1)
            //     rect.setAttribute("dy","1");
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
            // if(Collisionsquare()){
            //     mousedown=false;
            //     gamestart=false;
            //     gameover();}
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
            
        });
        
            // if(rectspeed==5){
            //     //console.log(tens,rectspeed);
            //     //clearInterval(rec);
            //     //rec=clearInterval(moverect,0) ;}
            //     //moverect.setSpeed(127);
                
            // }
    }}

