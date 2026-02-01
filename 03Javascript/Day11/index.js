//Shallow copy( Single Copy)
// let obj1 ={
//     a:1,
//     b:2
// }

// let obj2 = obj1;
// console.log(obj2);

// obj2.a=10;
// console.log(obj1,obj2);

//Deep Copy ( Mainly Two Copies )
// let obj3=structuredClone(obj1);
// obj3.a=20;
// console.log(obj3,obj1);


// nested object access Easily
const user ={
    name:"sarth",
    balance:420,
    address:{
        pincode:411023,
        city:"Mumbai"
    }
}

//For nested Objects assign() creates a deep copy
//for this it is referred to use structured clone

// const user2=Object.assign({},user);
// console.log(user2);
// user2.address.pincode=341245;
// console.log(user.address.pincode,user2.address.pincode);

// console.log(user.address);


// destructuring of the object

let obj = {
    name:"sarth",
    bal:20,
    age:20,
    arr:[10,20,30,40],
    address:{
        pincode:12345,
        city:"bombay"
    }
}
// const {address:{city}} = obj;
// console.log(city);

// const {arr:[forth]} = obj;
// console.log(forth);


// const {name,bal} = obj;
// console.log(name,bal);

//... represents the rest elements will present here

// const arr=[3,2,1,5,10];
// const [first,second,...third] =arr;
// console.log(first,second);

// In Object we can define function also

// let user5 ={
//     name:"sarth",
//     amont:420,
//     greet: function(){
//         return 10;
//     },
//     meet:function(){
//         return 20;
//     }
// }
// console.log(user5.greet());
// console.log(user5.meet());

let arr = [4,5,4,6,1];
arr.push(10);

