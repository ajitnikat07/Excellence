//call back hell..
//why call back function??
function fetchUser(callback){
    console.log("fetching the user detail");
    setTimeout(()=>{
        console.log("data fetching successfully");
        const name="Rohit";
        //data fetched from backend..
        callback(name)
    },2000);
}

function greet(name){
    console.log(`Hello Everyone ${name}`);
}

function meet(name){
    console.log(`Hello ${name} ,I will meet you in Delhi`);
}

fetchUser(meet);
fetchUser(greet);