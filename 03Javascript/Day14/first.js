// let obj ={

// };
// obj.name="rohan";
// obj.age=20;
// key value writable enumarable configurable
// console.log(obj);
// console.log(Object.getOwnPropertyDescriptor(obj,'name'));

// writable = if it is true,then we can change the value
// obj.name="mohan"

// configurable = true, then writable and enumerable is also change..

let obj1={};

Object.defineProperty(obj1,'name',{
    value:"rohan",
    writable:true,
    enumerable :true,
    configurable:true,
});
obj1.name="Yug"
console.log(obj1);

const obj2 ={
    name:"ajay",
    age:25,
    account_number:301214
}

//account number cannot be change..
Object.defineProperty(obj2,"account_number",{
    writable:false
});

obj2.account_number=20001;
console.log(obj2.account_number); //301214


// If we do enumerable false(only keys age and account_number will print)
const obj3 ={
    name:"ajay",
    age:25,
    account_number:301214
}
Object.defineProperty(obj3,"name",{
    enumerable:false,
});

for(let key in obj3){
    console.log(key);    // age , account_number
}

//prove tostring() enumerable is false due to this it is not prinnting with obj
console.log(Object.getOwnPropertyDescriptor(Object.prototype,"toString"));
console.log(Object.getOwnPropertyDescriptor(Object.prototype,"valueOf"));

Object.defineProperty(Object.prototype,"toString",{
    enumerable:true,
})

for(let key in obj3){
    console.log(key);
}