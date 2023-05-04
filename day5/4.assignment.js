// What happens if you pass a regular/invalid JSON string to JSON.parse? What will happen if such an invalid function runs in the program? Will other parts of the code execute correctly after that?


console.log("JSON parse using for regular string : ", JSON.parse(nestedJson));
console.log("JSON parse using for regular string : ", JSON.parse(studentJson));

const invalid = "dscas";
let invalid1;

console.log("JSON parse using invalid variable string : ", JSON.parse(invalid));

console.log("JSON parse using invalid constant string : ", JSON.parse(invalid1));

console.log("end of the execution of the program");