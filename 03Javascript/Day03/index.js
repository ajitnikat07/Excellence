// Number,string ,boolean ,null ,undefined ,Bigint,Symbol
 //Non-primitive datatype
 //Array,Objects,Function


// let n=10;
// let n2=20;
// let n3=50;

// //collection of the similar elements
// let arr = [10,20,30,40,50,"Rohit","Mohit"];
// console.log(typeof arr); //object
// console.log(arr);

// //for loop definition in javascript using an array
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// //Object Creation in javascript
// //why objects:- to access the data using key in backend easily..
// //key:value pair

// let obj ={
//     account_name :"om patil",
//     account_no:123456789,
//     account_location:"Pune",
//     balance : 420
// }
// console.log(typeof obj);

// let fun = function(){
//     console.log("This is one of the function");
//     return 10;
// }

// console.log(fun());
// console.log(typeof fun);     //function

//Type conversion

let num = "100";
console.log(Number(num));
console.log(typeof num);


//Boolean convert into number

let x=true;
console.log(Number(x));

let y= false;
console.log(Number(y));

let account ="123pl";
console.log(Number(account));

let x1=null;
console.log(Number(x1));  //0

let x2;
console.log(Number(x2));  //Nan


//String conversion
let ab=20;
console.log(String(ab));

let ax=true;
//"true"
console.log(typeof String(ax));

let py=null;
console.log(typeof String(py));

// convert into the boolen datatype
let p1="ajay";
console.log(Boolean(p1));

let p2 ="";
console.log(Boolean(p2));

let p3 = " ";
console.log(p3);

//Arithmetic operations
//divide & Multiply then Addition & Subtraction
console.log(4+8+18);
console.log(4+8-18);

//modulus give remainder
console.log(20%3);

// ++ increment operator , -- decrement operator
//Pre and post (increment or decrement) these are two types of operators
let sum = 20;
console.log(sum++);

//Asssignment Operators
//Only Assignment for any variable is possible by assignment operator

let xy =20;
console.log(xy);

xy +=10;  //xy=xy+10
console.log(xy);