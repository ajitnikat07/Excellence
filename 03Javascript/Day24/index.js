const form=document.querySelector("form");
// form.addEventListener("click",(event)=>{
//     // console.log(event.target.id)
//     console.log(event.target.value);
// });

//Event Can Be:1>change 2>focus 3>input

// form.addEventListener("change",(event)=>{
//     // console.log(event.target.id);
//     console.log(event.target.value);
// });

// form.addEventListener("focusin",(event)=>{
//     // console.log(event.target.id);
//     console.log(event.target.value);
// });

// form.addEventListener("focusout",(event)=>{
//     // console.log(event.target.id);
//     console.log(event.target.value);
// });

// form.addEventListener("reset",(event)=>{
//     // console.log(event.target.id);
//     console.log(event.target.value);
// });

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    // const first = document.getElementById("first");
    // console.log(first.value);

    // const second = document.getElementById("second");
    // console.log(second.value);

    const data=new FormData(form);
    console.log(Array.from(data.keys()));
    for(let key of data.keys()){
        console.log(key);
    }
});

//FormData is useful to get All Content