// //Number In Javascript
// let num1 = 243;            // All location will  be on Stack
// let num2 = new Number(243);
// let num3 =new Number(243);
// console.log(num1);
// console.log(num2);
// console.log(typeof num1);
// console.log(typeof num2);   //Memory Allocation is in Heap due to NEW Keyword

// console.log(num1==num2);  //true    (Object Convert into Number)-->Hence shows true
// console.log(num2==num3);  //false   (6000 == 9000 Give's False)

// //String in Javascript

// let num = 231.68;
// console.log(num.toFixed(1));  //231.7
// console.log(num.toPrecision(3));
// console.log(num.toExponential(3));
// console.log(typeof num.toString());
// console.log(num.valueOf());


//Math Modules

// console.log(Math.PI);
// console.log(Math.LOG10E);
// console.log(Math.abs(-7.8));    //tomake the positive value

// // floor and ceil

// let num1=23.5;
// console.log(Math.floor(num1));   //23(It provides value before decimal)
// console.log(Math.ceil(num1));    //24(It provides value after decimal)


// console.log(Math.random());
// console.log(Math.floor(Math.random()*10));


// //1-10 generate
// console.log(Math.floor(Math.random()*10)+1);

// 11-20 generates Logic
console.log(Math.floor(Math.random()*10)+11);
// 0 -9 + 11 = 11 -20

// min = 40 max = 50
let min = 40;
let max = 50;
console.log(Math.floor(Math.random()*(max-min+1)+min));

// 0 - 11
console.log(Math.floor(Math.random()*12));

// 0 - 100
