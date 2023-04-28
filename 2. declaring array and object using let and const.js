// Use let and const to create arrays and objects. Try modifying, deleting properties within the array or object. 

const objConst = {
    name:"hey",
    discount : 45
}
console.log("constant object assigning object  :", objConst);
objConst = {
    party: 4354                                     // getting here caught TypeError: Assignment to constant variable in browser
}
console.log("constant object reassigning new object  :", objConst);

const constantArray = [23,323,3434];
console.log("constant array before changeing object :", constantArray);
constantArray = [d,dsd,sd];                                      // getting here caught ReferenceError: d is not defined in browser
console.log("constant array after changeing object :", constantArray);