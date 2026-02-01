//C:- Accessing by css selectors:

//i:Single Element:- document.querySelector(Selector)
//ii.Multiple Elements:- document.querySelectorAll(Selector)

//D:- Accessing by tag name
//document.getElementsByTagName("tagname")

//E:- Accessing Using Relationship
//i:parent node
//element.parentNode or element.parentElement

//ii:
const id1=document.querySelector('#first');
id1.innerHTML="Hello Honey";

const id2=document.querySelector(".header2");
console.log(id2);
id2.style.backgroundColor="pink";

const obj=document.querySelectorAll(".header1");

//It Give Node Lists And Iteration As follows code in comment
//How to Iterate Over Node List

//1>
// obj.forEach(value => {
//     console.log(value);
// });

//2>
// for(let value of obj){
//     console.log(value)
// }

//3>
// for(i=0;i<Object.length;i++){
//     console.log(obj[i])
// }

//If we want to apply map on this then first convert it into an array

// Convert Node List Into An array
//Array.from(obj)


//**************************************
const object=document.getElementsByTagName('h1')
console.log(object);

const object1=document.getElementsByTagName('li')

//how to iterate over it.

//1.using normal for loop

// for(let i=0;i<object1.length;i++){
//     console.log(object1[i])''
// }

//2>using for of loop

// for(let value of object){
//     console.log(value);
// }

//3>using for each loop

// Array.from(object1).forEach((value)=>{
//     console.log(value);
// })

//In nodes spaces also may be present in element spaces is not there.