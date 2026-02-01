// scope thinking
//Global Scope,lOCAL Scope, Functional Scope

// let a=10;
// var b=20;
// const c=30;

// console.log(a);
// console.log(b);
// console.log(c);

function greet(){
    let a=10;
    var b=20;
    const c=30;
    
    console.log(a);
    console.log(b);
    console.log(c);
}

//calling to function
greet();

// if(true){
//     let a=10;
//     var b=20;
//     const c=30;
// }
// console.log(b);

for(let i=0;i<5;i++){

    console.log(i);
}

//while loop
let i=1;
while(i<6){
    console.log(i);
    i++;
}

// Array Traversing Using For Loop
let arr = [10,30,40,50]

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

const obj={
    name:"sarth",
    age:30,
    balance:5000
};

const key =Object.keys(obj);

for(let i=0;i<key.length;i++){
    
    console.log(obj[key[i]]);
}
