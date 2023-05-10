//  How will you create a new copy of the object below while updating the value of address.details[0] to “5“

const object = {
    name:"Harry Potter",
    age: 12,
    address: {
     details: ["4", 'Privet Drive'],
     area:'Little Whinging',
     city: 'Surrey',
     state: 'England'
    } 
   }
console.log("original object : ",object);

const copyObject = structuredClone(object);

console.log("cloned object : ",copyObject);

console.log("intial value of address details field : ",copyObject.address.details[0]);

copyObject.address.details[0]="5";

console.log("updated value of address details field : ",copyObject.address.details[0]);

const func = (u) => {
    return  5 > u ;
}

console.log("printing given function : ", [4,5,5656,6757,3,7].filter(func));