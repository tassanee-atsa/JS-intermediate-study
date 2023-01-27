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

  /*With typical promise consumption, 
  we won’t know whether a promise will resolve or reject, 
  so we’ll need to provide the logic for either case. 
  We can pass both a success callback and a failure callback to .then() */

  let prom = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num < .5 ){
      resolve('Yay!');
    } else {
      reject('Ohhh noooo!');
    }
  });
  
  
