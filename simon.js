let gameseq=[];
let userseq=[];
const srtbtn=document.querySelector(".srtbtn");
srtbtn.innerText="START";

let start=false;
let level=0;

let btnarr=["red","blue","green","yellow"];

srtbtn.addEventListener("click",function(){
    if(start==false){
    start=true;
    levelfun();
    }
})

function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },100);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },100);
}

let h3=document.querySelector("h3");
function levelfun(){
    userseq=[];
    level++;
    h3.innerText=`level ${level}`;
    
    let raninx=Math.floor(Math.random()*3);
    let ranclr=btnarr[raninx];
    let ranbtn=document.querySelector(`.${ranclr}`);
    gameseq.push(ranbtn);
    flash(ranbtn);
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",function(){
        if(start==true){
            let btn=this;
        userflash(btn);
        userseq.push(btn);
        check(userseq.length-1);
        }
    })

}
 
function check(inx){
    if(userseq[inx]===gameseq[inx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelfun,1000);
        }
       
    }
   else{
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){document.querySelector("body").style.backgroundColor="white";},250)
        h3.innerHTML=`Game over! Your Score is <b>${level}</b> <br> Start Again`
        reset();  
        }
    }

    function reset(){
        start=false;
        userseq=[];
        gameseq=[];
        level=0;
    }
