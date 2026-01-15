//here we creating a function for the repetitive tasks
function time(){
    const timers=document.getElementById("root");
    const now = new Date();
    const india=now.toLocaleTimeString();
    timers.innerHTML=india;
}

// while(true){
//     time();    code will crash
// }
setInterval(time,1000);

const timers=document.getElementById("root");
timers.style.fontSize="200px";
timers.style.display="flex";
timers.style.height="100vh";
timers.style.justifyContent="center";
timers.style.alignItems="center";

const id=document.querySelector("#first");
id.innerHTML="hello money";