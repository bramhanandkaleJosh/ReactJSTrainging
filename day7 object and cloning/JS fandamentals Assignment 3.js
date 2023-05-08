//  Write a function that sorts an array of objects by the key that is passed in the second argument, and in the order passed as the 3rd argiment. 

// let users = [{
//     "id": 1,
//     "first_name": "Nicki",
//     "email": "ncrozier0@squarespace.com",
//     "date_of_birth": "2009/05/09",
//     'gender':'Male',
//     }, {
//     "id": 2,
//     "first_name": "Raychel",
//     "email": "rmcgrady1@cpanel.net",
//     "date_of_birth": "2009/01/05",
//     'gender':'Female'
//     }, {
//     "id": 3,
//     "first_name": "Demetris",
//     "email": "dkilshall2@elpais.com",
//     "date_of_birth": "2018/12/31",
//     'gender':'Male'
//     }, {
//     "id": 4,
//     "first_name": "Amata",
//     "email": "abraiden3@canalblog.com",
//     "date_of_birth": "2012/05/23",
//       'gender':'Female'
//     }];
// sort(users, “id”, “desc”) //Should return users sorted by id in descending order
// sort(users, “first_name", “asec”) //Should return users sorted by first_name in ascending order

// answer:

function sort(object, propertyName, orderBy){

const typeOfPropertyName = !Array.isArray(object[0][propertyName]) && 
                               typeof new Date(object[0][propertyName]) === 'object' ? 'date '+orderBy :
                               typeof object[propertyName] ;

    switch(typeOfPropertyName){
        case 'string':
            object.sort(
                (a,b) => ( (orderBy === 'asec')  ? 
                           (a[propertyName] > b[propertyName] ? 1 : (b[propertyName] > a[propertyName] ? -1 : 0))  :
                          (b[propertyName] > a[propertyName] ? 1  : (a[propertyName] > b[propertyName] ? -1 : 0))  
                        )
                );
            break;

        case 'number':
            object.sort(
                (a,b) => ( (orderBy === 'desc')  ?  (b[propertyName]- a[propertyName]) : (a[propertyName]-b[propertyName]))   
                );
            break;

        case 'date asec':
            object.sort( (a,b) =>  ( new Date(a[propertyName]) - new Date(b[propertyName]))  );
            break;

        case 'date desc':
                object.sort( (a,b) => ( new Date(b[propertyName]) - new Date(a[propertyName]) ) );
            break;
    }
    return object;
}

console.log("sorting users array by id property : ", sort(users, 'id', 'asec'));

// console.log("sorting users array by name property : ", sort(users, 'first_name', 'desc'));

// console.log("sorting users array by id property : ", sort(users, 'date_of_birth', 'asec'));


















// rough stuff done 


// const numberProperty = 
// (a,b) => ( (orderBy === 'asec')  ?  (b[propertyName]- a[propertyName]) : (a[propertyName]-b[propertyName])  );

// const dateProperty = 
// (a,b) => ( (orderBy === 'asec')  ?  
//             (new Date(a[propertyName])-new Date(b[propertyName])) :
//             (new Date(b[propertyName]- new Date(a[propertyName])))  );

// const stringProperty = 
// (a,b) => ( (orderBy === 'asec')  ? 
// (a[propertyName] > b[propertyName] ? 1 : (b[propertyName] > a[propertyName] ? -1 : 0))  :
// (b[propertyName] > a[propertyName] ? 1  : (a[propertyName] > b[propertyName] ? -1 : 0))    );

