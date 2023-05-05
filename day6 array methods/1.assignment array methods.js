// filter by name

const filterByName = (firstName) => {
    return objectArray.filter(u => u.first_name===firstName);
}
console.log("print array filter by first name : ", filterByName("Townie"));

// map by email
const mapByEmail = () => {
    return objectArray.map(u => u.email);
}
console.log("printing array with email only using map function : ",mapByEmail());

// sort by date
const sortByDob = () =>  objectArray.sort( (a,b) => new Date(a.date_of_birth) - new Date(b.date_of_birth));

console.log("printing array sorted by date of birth : ", sortByDob());

// sort by name
const sortByName = () => {
     return objectArray.sort( (a,b) => a.first_name > b.first_name ? 1 : (b.first_name > a.first_name ? -1 : 0));
 }
 console.log("printing array sorted by firstName : ", sortByName());


// get object by Id
const getById = (id) => {
    return objectArray.find( u => u.id === id)
}
console.log("printing object get by id : ",getById(9));