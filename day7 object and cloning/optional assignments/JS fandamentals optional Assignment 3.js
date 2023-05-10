// Write a function that returns value of a nested key within an object
const harryObj ={
    name:"Harry Potter",
    age: 12,
    address: {
    details: ["4", "Privet Drive"],
    area:"Little Whinging",
    city: "Surrey",
    state: "England"
    } 
  }


function getNestedValue(obj, keys) {
    console.log("object from which nested key's value we will get is : ", obj);
    console.log("nested key is : ", keys);

    const keyArray = Array.isArray(keys) ? keys : keys.split(".");
    let value = obj;  
    for (let key of keyArray) {
      if (value && typeof value === "object" && key in value) {
        value = value[key];
      } else {
        return undefined;
      }
    }
    return value;
  }

//   getNestedValue(obj, “address.details.1”)
//   This should return “Privet Drive”
  