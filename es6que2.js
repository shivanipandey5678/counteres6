let count=0;

let flag="off";
let ans;

let btn=document.getElementById("startstop");
let Incbtn=document.getElementById("inc");
let Decbtn=document.getElementById("dec");
let header=document.createElement("h1");

function counting(){
    
    if(flag=="off"){
         ans=setInterval(()=>{
            console.log(count++);
            // count=count++;
            // console.log(count);
            // header.textContent=
            
        
        },1000);
        flag="on";
       
     }
    
    else {
       
        clearInterval(ans)
        flag="off";
        
        
    }
};
function inc(){
    
    clearInterval(ans)
     console.log(++count);
}
function dec(){
    clearInterval(ans)
   console.log(--count);
}













