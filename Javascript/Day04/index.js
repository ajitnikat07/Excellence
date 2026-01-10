// comparison operator
//number to number

// let a = 1;
// let a2 = 2;

// console.log(a<=a2);

// // == both are equal
// // < less than
// // > greater than
// // less than equal to
// // greater than equal to

// let num = 10;
// let str ="10";

// console.log(num==str);   //true here string is convert into the number(datatype)

// let a1 = 10;
// let str1 = "30";
// console.log(a1<str1);   //true

// // === (if type check is equal then it compares the value after the sucessful checking)

// console.log(a1===str1);


// let a3=30;
// let a4=30;
// console.log(a3===a4);

// null == undefined  //True 
// n ull can only be equivalent to undefined but in relational operator type conversion takes place
// null===undefined  //false

// console.log(null==undefined);
// console.log(null===undefined);

// console.log(null==0);   //false
// console.log(null<0);
// console.log(null<=0); //true
// console.log(null>0);
// console.log(null>=0); //true (type conversion takes place in this case)


//1 NaN is not equl to another NaN
// console.log(NaN==NaN);  //false
// let str3= "rohit";
// let str4 = "mohit";
// console.log(Number(str3)==Number(str4));

// let abc1=123;
// let abc2="123";
// let abc3=123;
// let abc4=true;

// console.log(abc1==abc2==abc3); //false
// console.log(abc1==abc2==abc4); //true

// console.log(undefined!=null);


// //Logical Opeators Explanation if both are true answer is true logical AND operator
let age = 18;
let money = 420;

// console.log(age>=18 && money>=420); //True

//Logical OR Operators
console.log(age>10 || money>200);

//Not operator

console.log(!(age>10));  //false

//bitwise operator(& | ^ ~ << >> >>>) bit by bit comparison takes place
//bit by bit operation are taken place simultaneously
// 4 ->  0 1 0 0
// 5 ->  0 1 0 1
//&     -----------
//       0 1 0 0 ->4
console.log(4 & 5);
console.log(11 & 14);
console.log(11 | 14);
console.log(2 ^ 3);  //1
console.log(5 << 3); //16
console.log(16 >> 2); //4

// 5  multiply by 2
