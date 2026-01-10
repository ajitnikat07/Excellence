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

obj1=obj2;  //Gives error due to const keyword
