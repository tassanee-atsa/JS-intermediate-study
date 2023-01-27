/*
To handle a “successful” promise, or a promise that resolved, we invoke .then() on the promise, passing in a success handler callback function:
*/

const prom = new Promise((resolve, reject) => {
    resolve('Yay!');
  });
  
  
  const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
  };
  
  
  prom.then(handleSuccess); // Prints: 'Yay!'