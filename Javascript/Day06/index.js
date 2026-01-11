// primitive data type
const num =10;
console.log(num);

// Non- Primitive datatype
const obj1 ={
    id:10,
    balance:200
}

//Object is stored in heap memory
obj1.id = 20;
console.log(obj1);

let obj2 ={
    id:20,
    money:30
};

// obj1=obj2;  //Gives error due to const keyword
//String in js
let str1="Hello World";
let str2='hiii';
let str3=`This is a string`;
console.log(str1,str2,str3);

const value=50;
console.log(`The Value is ${value}`);

// String Concatation
let s1 ="Hello";
let s2="Army";
let s3=s1+s2;
console.log(s3);
console.log(s1+s2);
console.log(s3.length);

// "hello coder army"
console.log('"Hello Coder Army"');
console.log("'Hello Coder Army'");

// i want to print the \n also then use Escape Character
let important="Todays It Era is a Golden chance to \\nLive your Dreams";
console.log(important);

//Changing Case Operations (No change in original String)

let message ="Sarth";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message[0]);
console.log(message.charAt(2));
console.log(message.indexOf('r'));

// Searching In the string
let van="Vehicle";
console.log(van.indexOf('e'));
console.log(van.concat("ajit"));
console.log(van);
console.log(van.indexOf('z')); //-1 if not found

// Slicing the string
let fruit="AppleBananaGrapes";
let slicedFruit=fruit.slice(5,11);
console.log(fruit.slice(-3,5));
console.log(slicedFruit);

let str5 ="Hello Ji Kaise Ho Ji";
console.log(str5.replace("Ji","Bro"));

//trim() function removes the extra spaces from starting and ending of the string
let str12 ="  Hello Ji  ";
console.log(str12.trim());

//New  way to reate string using String constructor
let letest=new String("Hello New String");
console.log(letest);
console.log(typeof letest); //object

