// call back function
//passing function as argument in other function.

function names(fun){
    console.log("Hello I Am Love");
    fun();
}

function greet(){
    console.log("I am a call back function");
}
names(greet);

//or

// names(function greet(){
//     console.log("I am a call back function");
// });

function fetchData(){
    //lot of code is here
    console.log("I am fetching the data");
}
setInterval(fetchData,5000);
