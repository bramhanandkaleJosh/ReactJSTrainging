// What happens if we pass numbers, strings, undefined, null to JSON.stringify?

const nested = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: undefined,
    father : {
        name: 'John',
        age: 30,
        isAdmin: false,
        courses: ['html', 'css', 'js'],
        spouse: null,
    }
  };

  const nestedJson = JSON.stringify(nested);
  
  console.log("stringify nested objects using JSON : ", nestedJson);

const student = ["dscasdc", "asdcasc", 34343];

const studentJson = JSON.stringify(student);

  console.log(typeof studentJson); // we've got a string!
  console.log(studentJson);
  
  console.log("stringify numbers : ", JSON.stringify(2323));
  console.log("type of stringify numbers : ", typeof JSON.stringify(2323));


  console.log("stringify string : ", JSON.stringify("I am a string"));
  console.log("type of stringify string : ", typeof JSON.stringify("I am a string"));

  console.log("stringify undefined : ", JSON.stringify(undefined));
  console.log("type of stringify undefined : ",typeof JSON.stringify(undefined));

  console.log("stringify null : ", JSON.stringify(null));
  console.log("type of stringify null : ",typeof JSON.stringify(null));

  console.log("stringify NaN : ", JSON.stringify(NaN));
  console.log("stringify NaN : ", typeof JSON.stringify(NaN));
  