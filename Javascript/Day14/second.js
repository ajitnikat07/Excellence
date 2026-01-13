// for in loop we cant take with the array   why???
//array is the end of the day it is a object..

const arr=[5,10,20,30,40,50];
//0:5
//1:10
//2:20
//3:30
//4:40
//5:50
//name:rohity
arr.name="rohity";
for(let key in arr){
    console.log(key,arr[key]);
}

// normal for loop it is very helpful for arrays rather than for in loop
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}