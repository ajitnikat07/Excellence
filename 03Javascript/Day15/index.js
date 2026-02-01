// why writable??  bcoz dont want accidental changes, it is not for hacking

// let user = {
//     name:"Mohit",
//     age:30
// }
// console.log(typeof user);
// console.log(Object.getOwnPropertyDescriptor(user,"name"));

// Object.defineProperty(user,"name",{
//     writable:false,
// });

// user.name="Sohit";
// console.log(Object.getOwnPropertyDescriptor(user,"name"));

// for of loop

// const arr=[10,20,12,18,13]
// for(let value of arr){
//     console.log(value);
// }

// let str="hi boss how are you??";
// for(let value of str){
//     console.log(value);
// }

// don't use for of loop on objects but why?? lets try
// iterator is not defined for objects
let obj = {
    name:"kavi",
    age:22,
    gender:"male"
}

// for(let value of obj){
//     console.log(value);  //gives error obj is not iterable..
// }

//using for of loop iteration on objects is not possible
//Object.values(obj) returns the array..

for(let value of Object.values(obj)){
    console.log(value);
}

//we can iterate on array using the ((for Each loop))
// forEach loop  wants callback function as input

let arr1=[10,20,30,40,50];
arr1.forEach(function(num){
    console.log(num);
});

//using arrow function
arr1.forEach((num)=>{
    console.log(num);
});

// filter concept use for filtering purpose
//filter returns true and false but it select only after it is true

let arr2=[10,20,30,5,55];
const result=arr2.filter((number)=>{
    return number%2==0;
});

console.log(result);

//filter complex example

const students=[
    {name:"Rohan",age:22,marks:40},
    {name:"Mohan",age:25,marks:30},
    {name:"Pohan",age:24,marks:20},
    {name:"Dohan",age:28,marks:60},
    {name:"Gohan",age:27,marks:50}
];

//Instead Of Object we can destructure it also
const marks=students.filter((object)=>{
    return object.marks>=50
});

console.log(marks);


//concept of map (easy way using an arrow functions)
const array=[10,30,12,18,14];
const results=array.map((number)=>{
    return number*number;
});

console.log(results);


//filter and map together

const arrays=[10,20,30,40,50];
const resultss=arrays.filter((num)=>num%2==0).map((num)=> num*num);
console.log(resultss);

// for each does not return anything all others return arrays