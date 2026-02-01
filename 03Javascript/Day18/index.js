// The This keyword in Javascript is a special keyword that refers to 
// the content in which the current code is being executed.
// its value depends on how the function where this is called

//1>
//global context ( outside any function )
//In browser: window
//In Node js : Modules export object

console.log(this);

function name(){
    console.log("In Name Functions");
}

//2>
// i:Non-strict Mode
// when this is used in function it refers to global object

// Inside a function

// ii:In Strict Mode
//this will be undefined inside the function

function greet(){
    console.log(this);
}
greet();


let obj1 = {
    name:"kailas"
}

Object.freeze(obj1);
console.log(obj1);

//3.Inside a method(object context)
// when this is used inside an objects method it refers to the objcet that

const obj2={
    name:"manisha",
    age:20,
    greet:function(){
        console.log(this);
    }
}
obj2.greet();

// Arrow function dont hve their own this
// Instead they inherit this fro the surrounding (lexical) scope
//global scope me this window ko point out karta hai..wo inherit karta hai
let obj3={
    name:"mohit",
    age:88,
    greet:()=>{
        console.log(this);
    }
}
obj3.greet();

let obj4={
    name:"mohit",
    age:10,
    greet:function(){
        let a= ()=>{
            console.log(this);
        };
        a();
    }
}
obj4.greet();


//Inside a constructor and a class
class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

let a =new person("mohit",15);
console.log(a);