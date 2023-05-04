// 2. Take a function that accepts a function as a parameter (also known as callback function). 


function test(callback){
     callback();
}
function callbackFunc(){
    console.log("Calling the callback function");
    return 5;
}


console.log(test(callbackFunc)); // this works

// console.log(test(callbackFunc()));   
// here we are getting error as callback is not a function because we are passing callback as a argument and not a fucntion

console.log(test(()=> callbackFunc()));  // this works



// What happens when you return callback() from the test function?
// What happens when you return callback from the test function?

function test1(callback){
    return callback();
}

console.log(test1(callbackFunc));

console.log(test1(callbackFunc));