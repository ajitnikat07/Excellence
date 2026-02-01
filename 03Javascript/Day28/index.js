//call back hell

function placeOrder(callback){
    console.log("I am Placing the order");

    setTimeout(()=>{
        console.log("Talking with dominos");
        callback();
    },2000)
}

function preparingOrder(){
    console.log("Pizza prep started");

    setTimeout(()=>{
        console.log("pizza prep done!!");
    },5000);
}

function pickUp(){
    console.log("Reaching restaurant for picking order");

    setTimeout(()=>{
        console.log("Order Picked Up Successfully..");
    },3000)
}

function deliveryOrder(){
    console.log("Delivery boy is on the way..");

    setTimeout(()=>{
        console.log("Delivery received Successfully");
    },5000);
}

placeOrder(preparingOrder);