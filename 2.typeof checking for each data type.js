// Use the typeof operator to find the types of different variables.
// Specially note what the typeof operator returns for arrays, null values and NaN.

let b = undefined;
console.log("type of b:",typeof b);
b= 5;
console.log("type of b:",typeof b);
b= "I am String";
console.log("type of b:",typeof b);
b= 123234n;
console.log("type of b:",typeof b);

b=null;
console.log("type of b :",b);

b={
    name:"John",
    no: 898908998
}
console.log("type of an object :", typeof b)

console.log("printing object before deleting property : ",b)
delete b.no ;
console.log("printing object after deleting property : ",b)

b= parseFloat(b);
console.log("assigning NaN to b :", b);
console.log("checking NaN value of b without typeof operator :", isNaN(b));

b=["sd","sdd"];
console.log("type of array variable :", typeof b);
console.log("type checking of an array without typeof operator :", Array.isArray(b));

console.log("printing array before pop operation : ",b);
b.pop();
console.log("printing array after pop operation : ",b);
