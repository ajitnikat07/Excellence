const parent=document.getElementById("root");
const element = document.createElement("li");
element.innerHTML="TS";

// parent.prepend(element);
// parent.append(element);


// const child2= parent.children[1];
// parent.insertBefore(element,child2);

// parent.replaceChild(element,child2);

// const parent1=document.getElementById("root");
// parent1.innerHTML +="<li>TS</li>";

//ul ke pehle div ko attach karna hai
const ele=document.createElement("div");
ele.innerHTML="Hello Sinhgad Army";

//parent.insertAdjacentElement("beforebegin",ele);
parent.insertAdjacentElement("afterend",ele);

//Deleting The node or Element
document.querySelector("li").remove();

//hw proj:-
//bg color will change in 5 seconds