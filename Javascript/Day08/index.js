// console.log(Math.floor(Math.random()*10)+ 1);

const arr = [2,35,1,8,9,"MK",true];
// console.log(arr[0]);
// console.log(arr[9]); //undefined

// console.log(arr.length);
// console.log(arr.at(0)); 
// at can help us to access the Numbers Using The Negative Indexing

// structure Clone Mainly Used to make the duplicate Array That is Clone Array
// const newArray = structuredClone(arr);
// console.log(newArray);


// //both pointing to the same memory Location
// console.log(newArray==arr); //true

//Push And Pop Elements In an Array
// arr.push(30);
// arr.push(50);
// console.log(arr);

//Pop Removes Last Elements In Array
// arr.pop();
// arr.pop();
// console.log(arr);

// Add elements At the Start of Array using unshift
// arr.unshift(100);
// arr.unshift(200);
// console.log(arr);

//Remove Elements From Start of Array using shift
// arr.shift();
// arr.shift();
// console.log(arr);

//delete Operation 
// delete arr[0];
// console.log(arr);

// console.log(arr.indexOf(9)); //3

//includes checks whether the element is present in the array or not
// console.log(arr.includes("MK")); //true
// console.log(arr.includes("Hello")); //false

// slice ( Last Index Is Not Included Original Array is not changing)
// console.log(arr);
// console.log(arr.slice(2,4));
// console.log(arr);

// Splice (Original Array is changing)
//splice(starting_index, number_of_elements_to_be_removed)
// console.log(arr.splice(2,5));
// console.log(arr);

// console.log(arr.toString());

// arr.push(2,4,5);
// console.log(arr);

//For Joining Purpose Join Is Used
// console.log(arr.join("-"));

// concat
// let arr1 = [2,3,5,6];
// let arr2 = [5,12,19,20];

// let arr3 = arr1.concat(arr2);
// console.log(arr3);

//Push Creates An 2D array 

// arr1.push(arr2);
// console.log(arr1);
// console.log(arr1[4][0]);

//Declaration of the 2D Array
let arr1 = [1,2,3,4,5,6,7,8,9];
let arr2d = [[1,2,3],[4,5,6,],[7,8,9]];

//Covert 2d into 1d Using Flat
let new_Arr=arr2d.flat(Infinity);
console.log(new_Arr);

console.log(arr2d)
console.log(arr2d[0]);
console.log(arr2d[0][1]);

let arr3d=[[1,2,[4,5]],[6,7,8]];
console.log(arr3d[0][2][0]);

let abc = [2,1,3,4];
console.log(Array.isArray(abc));

let ac = new Array(2,12,12,45,89,45,"Sharma");
console.log(ac);

let account = new Array(2);
console.log(account);    //2 Empty items

