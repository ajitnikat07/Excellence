// Callback hell problem is solved by the promises
//feth is a async task
//weather
console.log(3+4);
console.log(7*2);

const promises = fetch('http://api.weatherapi.com/v1/current.json?key=1e4af24a608043b3a95185239262101&q=London&aqi=yes');
console.log(promises);  //promise is pending is the output

promises.then((response)=>{    
    console.log(response);
    //here data is printed which is present in the Api
}).catch((error)=>{
    console.log(error);
});

// setTimeout(()=>{
//     console.log(obj);
// },2000);
// console.log(obj); //promise pending 

//Promises 3 steps:-

//1.Pending
//2.Resolve
//3.Reject
//In Arrow function same line will return no need to return by ourselves

const pro2 = promises.then((response)=>{
    const pro2 =response.json();  //output is promise(pending)
    pro2.then((data)=>{
        console.log(data);  //It will provide the data
    })

    //return response.json => promises pending
});
