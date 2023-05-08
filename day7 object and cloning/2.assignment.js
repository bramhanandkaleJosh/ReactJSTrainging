// Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries.

let obj = {
    a:'Apple',
    b:['Basketball','Baseball'],
    c: {
     call: 'cellphone'
    },
    d: 'Dog'
   }

// console.log("obejct.values : ", Object.values(obj));
// console.log("obejct.keys : ", Object.keys(obj));
// console.log("obejct.entries : ", Object.entries(obj));

let filterObj= (object) => Object.values(object).filter( u => typeof u != 'object' ) ;

console.log("printing object in which obect values are filtered out : ", filterObj(obj));
