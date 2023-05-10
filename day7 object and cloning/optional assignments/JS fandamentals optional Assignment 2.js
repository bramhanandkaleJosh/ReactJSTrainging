// Write a recursive function to create a deep clone of a nested object

function deepClone(obj) {    
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }
    const clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key]);
      }
    }
    return clone;
  }
  

  const obj = {
    a: 1,
    b: {
      c: 2,
      d: [3, 4, 5],
    },
  };
