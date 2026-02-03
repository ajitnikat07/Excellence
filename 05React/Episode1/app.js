//React is a Library of the javascript(It is means only the javascript written by facebood developers)
//what is mean by missing object??
//place where we give attribute to the tag
/*
* 
* 
*react Element(Object) =>HTML (Browser Understanding)
* 
* 
*/
const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [ 
        React.createElement("h1",{},"I'm an h1 tag"),
        React.createElement("h2",{},"I'm an h2 tag") 
        ]
    )
);
//jsx is exits that why to reduce the code complexity it makes our life easy

// const heading = React.createElement(
//     'h1', 
//     {id:"heading"},
//     "Hello world from React!!"
// );

console.log(parent); //object becacuse h1 is not tag it is react h1 element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
