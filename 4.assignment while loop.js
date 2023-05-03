// 4. Accomplish the same using a while loop.

let arraySizeWhile =25 ;
let arrayWhile = [];
let count=0;
while(count<arraySizeWhile){
    arrayWhile[count] = (count+1);
    count++;
}
console.log("printing array generated in while loop", arrayWhile);