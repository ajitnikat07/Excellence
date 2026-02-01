let obj ={
    name:"sarth",
    age:25,
    gender:"male",
    city:"Mumbai"
};

// for in loop, I can iterate over keys in an object
for(let key in obj){
    console.log(key,obj[key]);
}

// Object.keys(obj)

console.log(Object.keys(obj));

let obj2=Object.create(obj);
obj2.money=420;
obj2.id=15;

// console.log(obj2);
for(let key in obj2){
    console.log(key);
}