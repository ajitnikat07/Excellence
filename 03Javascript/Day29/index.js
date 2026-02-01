// js is a single synchronour language
//js behaviour : Async

//Client can talk with server client can be in java,javascript ,client is nothing but it is web app or any app or any initerface

//Universal format should be there to talk with client to server.

//Api is set of rules or format..
//setTimeout is the part of web api

//web api is present in the browser.(Js engine,DOM,window,timer,searchBar)

//Api is used for commmnication between two different interfaces
//This is a asynchronous nature in javascript

//event loop push callback function into stack 
console.log("Hello World");

setTimeout(()=>{
    const a=24;
    console.log(a);
},4000);

console.log("Program Ends");
console.log("I am first");

fetch("https://youtube.com")
.then(()=>{
    console.log("hello");
})

console.log("I am last");