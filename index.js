
//how to cretae Element in Recat
const element1 = React.createElement("h1",{id:"first", className:"heading"},"Hello From C2w");

const element2 = React.createElement("h1",{id:"second", className:"heading"},"Hello From C2w1");

const div1 = React.createElement("div",{},[element1,element2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div1);

//React ka under additional functionality aata hai jsx