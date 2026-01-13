//concept about reduce

const arr = [10,20,30,40,50];

// const result = arr.reduce(callback function,initialization) format
const result=arr.reduce((acc,curr)=>{
    console.log(acc,curr)
    acc=acc+curr;
    return acc;
},0)
console.log(result);

// Real world usecase of reduce

let arr1=["banana","apple","orange","banana","apple","orange","grapes"];
// finale result is in the form of object
// acc={ } {acc is a accumulator}

const result1=arr1.reduce((acc,curr)=>{
     if(acc.hasOwnProperty(curr)){
        acc[curr]++;
     }else{
        acc[curr]=1
     }
     return acc;
},{});

console.log(result1);


let obj ={
   name:"ajay",
   age:10
}
console.log(obj.hasOwnProperty("name"));