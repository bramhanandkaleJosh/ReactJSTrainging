// What will be printed to the console

const testAsyncFunction2 = () =>{
return Promise.reject('Test static reject');
};


testAsyncFunction2()
.then(   (res) => console.log('Response in then block', res)    )
.catch(  (err) => console.log('Error in catch block', err)      );
