// 3. Declare a variable let arraySize = 25;. Using a for loop, add numbers from one onwards into an array till the arraySize is reached.

let arraySize = 25;

let array = [];

for(let i=1; i<=arraySize ; i++){
    array[i-1]=i;
}
console.log("array generated in for loop",array);


// 5. Can you use return instead of break in loops?

// No we can't use return statement in loop instead of break.