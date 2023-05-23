//  Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has been received in the fetch.

function fetchDataWithDelay(url) {
    return (resolve, reject) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setTimeout(() => {resolve(data);},   2000 );          // Delay of 2 seconds
        })
        .catch(error => {
          reject(error);
        });
    };
}
  
// Example usage
// function fetchWithDelay(url){ 
    
    fetchDataWithDelay(url)
    .then(data => console.log('Data using fetch with delay:', data))       // Resolved data after 2 second
    .catch( error => console.error('Error in using fetch with delay:', error) );
// }