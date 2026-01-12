// Hashing Technique is used to store Objects In Heap
let obj1 = {
    name:"Sharma",
    age:45
};

console.log(obj1.name);
console.log(obj1.age);

// Functions In Javascript
// function greet(){
//     console.log("In Greet Function")
// }
// greet();


// const dog = function(){
//     console.log("In Greet Function")
// }

// dog();

//Parameter Passing

function sum(number1,number2){
    console.log(number1+number2);
}

// function call: arguments

// sum(10,20);
// sum(10,15);


// function multiply(number1,number2){
//     // Multiplication of the two Numbers
//     return number1*number2
// }

// console.log(multiply(4,5));

// const fun = function(){
//     console.log("Hello Core2web")
// }

// fun();

// Arrow Functions
// Advantages:- It is a shortcut
const suma= (number1,number2)=>{
    console.log("Implemented Using Arrow Function");
    return number1+number2
}

console.log(suma(3,4));


//  cube using arrow functions
const cube = (number) =>{
    return number*number*number;
}

console.log(cube(3));

// Belo operator is known as rest operator
// spread operator vs split operator

const suman = function(...number){
    //using for loop sum can be print
    console.log(number);
}
suman(2,3,4);


// Providing Object to the Function or passing
let obj5={
    name:"sarvesh",
    age:17
}

function gun({name,age}){
    console.log(name,age)
}
gun(obj5);

// string type
let str1 = "Hello"
console.log(typeof str1);

//object type
let str2=new String("World");
console.log(typeof str2);