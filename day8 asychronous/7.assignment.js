// Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has been received in the fetch. with async/await.

function fetchDataWithDelay(url) {

    return async (resolve, reject) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setTimeout(() => {
          resolve(data);
        }, 2000); // Delay of 2 seconds
      } catch (error) {
        reject(error);
      }
    }

}
 

// function fetchWithDelayUsingAsyncAwait(url) { 
    fetchDataWithDelay(url)
    .then(data => {
      console.log('Data using fetch with delay:', data); // Resolved data after 2 seconds
    })
    .catch(error => {
      console.error('Error in using fetch with delay:', error);
    });
// }