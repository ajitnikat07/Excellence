const grandparent=document.getElementById("grandparent");
const parent=document.getElementById("parent");
const child=document.getElementById("child");


//Event Bubbling And Capturing
//event.target is helpful for who trigger me..kis element ne trigger kiya hai
//event.target gives current target

child.addEventListener("click",(event)=>{
    console.log(event.target);
    console.log("Child Clicked");
},true);

parent.addEventListener("click",(event)=>{
    console.log(event.target);
    console.log("Parent Clicked");
},true);

grandparent.addEventListener("click",(event)=>{
    console.log(event.target);
    console.log("Grand-Parent Clicked");
},true);

//Event delegation


