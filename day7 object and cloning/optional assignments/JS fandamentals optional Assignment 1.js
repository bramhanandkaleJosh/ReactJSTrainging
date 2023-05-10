// Write a function to check deep equality of two nested objects/arrays

function deepEquals(obj1, obj2) {
  console.log("printing object1  : ", obj1);
  console.log("printing object2  : ", obj2);

    if (typeof obj1 !== typeof obj2) {
      return false;
    }
    if (typeof obj1 === "object") {
      if (Array.isArray(obj1) !== Array.isArray(obj2)) {
        return false;
      }
      if (Array.isArray(obj1)) {
        if (obj1.length !== obj2.length) {
          return false;
        }
        for (let i = 0; i < obj1.length; i++) {
          if (!deepEquals(obj1[i], obj2[i])) {
            return false;
          }
        }
      } else {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length) {
          return false;
        }
        for (let key of keys1) {
          if (!obj2.hasOwnProperty(key) || !deepEquals(obj1[key], obj2[key])) {
            return false;
          }
        }
      }
      return true;
    }
    return obj1 === obj2;
  }
  


  // Examples with nested objects
const obj1 = { a: 1, b: { c: 2 } , d:["as","asas"]};
const obj2 = { a: 1, b: { c: 2 } , d:["as","asas"]};
// console.log(deepEquals(obj1, obj2));  // true

const obj3 = { a: 1, b: { c: 2 }, d:["as","asas"] };
const obj4 = { a: 1, b: { c: 3 } };
// console.log(deepEquals(obj3, obj4));  // false

// Examples with nested arrays
const arr1 = [1, [2, [3, 4]]];
const arr2 = [1, [2, [3, 4]]];
// console.log(deepEquals(arr1, arr2));  // true

const arr3 = [1, [2, [3, 4]]];
const arr4 = [1, [2, [3, 5]]];
// console.log(deepEquals(arr3, arr4));  // false
