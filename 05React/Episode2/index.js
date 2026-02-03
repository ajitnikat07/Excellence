import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [ 
        React.createElement("h1",{key: "h1"},"I'm an h1 tag"),
        React.createElement("h2",{key: "h2"},"I'm an h2 tag") 
        ]
    )
);  
console.log(parent); //object becacuse h1 is not tag it is react h1 element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);