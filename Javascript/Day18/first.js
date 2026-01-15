// global object:object (All Parts are accessible without permission of global object)
// Chrome Browser: window(global object).
// Node js: global
// what is mean by global object internally??
// parent of all function is the global objects
// global object name irrespective of the envirnments:- that is globalThis

console.log("Hello world");
console.log(Math.random());
// new String();
// new Object("Kl);

let obj ={
    name:"sneha",
    age:35,
}
console.log(obj.name);
console.log(obj.age);
// console.log(window.Math.random()); // gives error
console.log(globalThis.Math.random());


