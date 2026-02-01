//<li>TS</li>

//Created an element.
function attach(content){
    const element=document.createElement("li");
    element.innerHTML=content;

    const parent=document.getElementById("root");
    parent.appendChild(element);
    //parent.append(element,"Hello Coder Army")
}

// Using Arrow Function

// let meet= (content)=>{
//      const element=document.createElement("li");
//      element.innerHTML=content;

//      const parent=document.getElementById("root");
//     parent.appendChild(element);
// }
// meet("ajit")

attach("Node");
attach("React");
attach("TS");
attach("TailwindCss");