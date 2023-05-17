// const promise = new Promise(resolve => setTimeout(() => resolve('dAlan'), 100));

// promise.then(res => {
//   return res === 'Alan' ? Promise.resolve('Hey Alan!') : Promise.reject('Who are you?')
// }).then((res) => {
//   alert(res)
// }, (err) => {
//   alert(err)
// });

// const executorFn = (resolve, reject) => {
//     console.log('The executor function of the promise!');
//   };
  
//   const promise = new Promise(executorFn);

const promise = new Promise((resolve, reject) => {  
    setTimeout(() => {
      resolve('*');
    }, 1000);
  });
  
  const twoStars = (star) => {  
    return (star + star);
  };
  
  const oneDot = (star) => {  
    return (star + '.');
  };
  
  const print = (val) => {
    console.log(val);
  };
  
  // Chaining them all together
  promise.then(twoStars).then(oneDot).then(print);