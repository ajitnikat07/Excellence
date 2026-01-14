// set is collection of unique values

// set :unique value

const set1=new Set([10,20,30,40]);
console.log(set1);
console.log(typeof set1);

const set2=new Set();
set2.add(4);
set2.add(6);
set2.add("mohan");
set2.add("rohan");
set2.add(42.56);

//to check size of the set
console.log(set2.size);

//to delete elements in set
set2.delete("rohan");
console.log(set2);

//clear property(clears everything)

set2.clear();
console.log(set2);

let arr=[10,30,40,50,40,10,20];
const set3=new Set(arr);
console.log(set3);

arr=[...set1];
console.log(arr);

// Union of The Two Sets
let set4= new Set([10,20,30,40,50]);
let set5 =new Set([10,20,70,80]);

let set6=new Set([...set4,...set5]);
console.log(set6);

//Intersection
//filter:array

const result= [...set4].filter((num)=>set5.has(num));
console.log(result);

//Iterate Over set
//use for of beacause set is iterable
for(let value of set4){
    console.log(value);
}

// for each operation
set1.forEach((value)=>{
    console.log(value);
});

