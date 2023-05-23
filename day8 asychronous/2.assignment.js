// Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ). Log the data into the console once it is received

const apiUrl = 'https://reqres.in/api/users ';

// const invalidApiUrl = 'https://s.in/api/users ';

// second way to call an api
function getPromise(URL) {
    const promise = new Promise(function (resolve, reject) {
      let req = new XMLHttpRequest();
      req.open("GET", URL);
      req.onload = function () {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          reject(new Error("There is an Error!"));
        }
      };
      req.send();
    });
    return promise;
}

function apiCallPromise(apiUrl) { 
getPromise(apiUrl)
.then((re) => console.log('we got the result from apicall is as : ', re))
.catch((error) => console.log('we got error from apiCall as : ', error))
.finally(() => console.log('Calling finally after promises execution done.......!', ));
}

// let invalidApiCallPromise = getPromise(invalidApiUrl)
// .then((result) => console.log('we got the result from apicall is as : ', result))
// .catch((error) => console.log('we got error from apiCall as : ', error))
// .finally((response) => console.log('printing data from an api call : ', response));






// api calling using fetch
// function fetchData(url) {
//     console.log('fetching data from url end point : ', url);
//     return new Promise((resolve, reject) => {
//       fetch(url)
//         .then(response => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//           }
//           console.log('printing response from the url end point : ', response);
//           return response;
//         })
//         .then(data => {
//           resolve(data);
//         })
//         .catch(error => {
//           reject(error);
//         });
//     });
// }