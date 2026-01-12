

let obj1={
    name:"sarth",
    bal:50
}
let obj2={
    amount:51,
    count:10
}

//prototype Chaining is possible due to this all properties is inherited
//In Below Code Obj2 Inherits the properties From obj1
//From Array.prototype arr.__prototype__ inherits all properties from Array.prototype
obj2.__proto__=obj1;
console.log(obj2.name);
console.log(obj2.bal);

let arr=[10,20,30]
console.log(arr.__proto__.__proto__.__proto__);

console.log("Prototype Done");