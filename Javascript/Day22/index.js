const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Hard work beats talent when talent doesn’t work hard.",
  "Dream big. Start small. Act now.",
  "Consistency is more important than motivation.",
  "Your future depends on what you do today, not tomorrow.",
  "Learning never exhausts the mind.",
  "Discipline is the bridge between goals and achievement.",
  "Believe you can and you're halfway there.",
  "Code. Learn. Improve. Repeat."
];

// const button = document.querySelector("button");
// button.addEventListener("mousemove",()=>{
//     const text=document.getElementById("quote");
//     const index= Math.floor(Math.random()*quotes.length);
//     text.textContent=quotes[index];
// });


//Keybord Events(2nd parameter is callback function).
//eventListener Gives Object in free ie event object.

document.addEventListener("keydown",(event)=>{
      console.log(event.key);
      console.log(event);
      const text=document.getElementById("quote");
      const index= Math.floor(Math.random()*quotes.length);
      text.textContent=quotes[index];
});
