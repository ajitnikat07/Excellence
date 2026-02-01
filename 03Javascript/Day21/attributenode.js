// Creating Attribute Node in Javascript

//Access to first list..
const element=document.createAttribute("id");
element.value="first";

const curr_list=document.querySelector("li");
curr_list.setAttributeNode(element);

//Access to second list in code

const parent=document.getElementById("root");
console.log(parent.children);
parent.children[1].setAttributeNode(element);

// What react actually do??
// To write code efficiently and in optimise way by own...
// React is Easy but condition is javascript shoould be strong.
