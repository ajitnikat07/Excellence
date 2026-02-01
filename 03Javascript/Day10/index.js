// // how to create an Object
// //Key:Value Pair
// const obj ={
//     0:20,
//     name:"Sarth",
//     acc_balance:430,
//     gender:"Male",
//     age:18,
//     "account number":123
// }

// const insta = {
//     insta_id:"sarth_09",
//     password:"sarth@2005",
//     undefined:30
// }

// const arr=['sarth',430, 'Male',20];
// console.log(obj);
// console.log(obj.name);
// console.log(typeof obj);

// console.log(obj.name);
// console.log(obj.age);

// obj.name ="kothale"
// console.log(obj);
// console.log(obj["gender"]);
// console.log(obj["account number"]);
// console.log(obj[0]);

// const arr1 ={
//     0:20,
//     1:30,
//     2:70
// }
// const arr2 =[50,50,70]

// Array Internally Follows the Object Structure


// const person = new Object();
// person.name = "sarth";
// person.age = 80;
// person.gender="Male"

// console.log(person);

// //delete
// delete person.age;
// console.log(person);

// //updation
// person.name ="Mohit"
// console.log(person)


// // third Method : class

// class local{
//     constructor(name,age,gender){
//         this.name=name;
//         this.age=age;
//         this.gender=gender;

//     }
// }
// let local1=new local("hardik",20,"Male");
// let local2=new local("rohit",45,"Male"); 
// let local3=new local("Mohan",45,"Male");
// console.log(local1);
// console.log(local2);
// console.log(local3);


let obj ={
    name:"pranav",
    age:30,
    gender:"Male",
    account_no:123
}

// Keys,Values

const arr=Object.keys(obj);
console.log(arr);

const arr1=Object.values(obj);
console.log(arr1);

const arr3=Object.entries(obj);
console.log(arr3)

// assign usecase (To Combine The Two Objects Together Into the Third One)
let obj1={
    a:1,
    b:2
};
let obj5={
    c:3,
    d:4
};

const obj6 = Object.assign({ },obj1,obj5);
console.log(obj6);
console.log(obj1);