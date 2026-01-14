// map is an collection of key value
// It is stored in the key value format and key should be unique

const map1 = new Map();
map1.set(3,90);
map1.set("rohit",45);
map1.set("virat",18);
map1.set("mahesh",23);

console.log(map1);

const map2=new Map([
    [4,"mohan"],
    ["mohan","rohan"],
    [30,9]
]
);
console.log(map2);

//iteration on map using for of loop
for(let value of map2){
    console.log(value);
}
