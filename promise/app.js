/*Using catch() with promise

Seperation of concerns → writing the clean code→ oganising code into distinct sections each handling a specific task → quickly navigate our code

Instead of passing 2 handler into one. We can chain the second .then to the first. To be more readable we use .catch() function with the failure handler.
*/

prom. then ((resovledValue) => {
    console.log(resolvedValue)})
    .catch((rejectionReason) => {
    console.log(rejectionReason) })

/* Consuming Promises

An initial state of promise is pending.  But we have a guarantee that it will settle.

.then() method allows us to say. I have a promise, when it settles, then here is what I want to happen..

.then() is a higher-order function that takes two callback functions as arguments → success or failure handlers (onfulfilled, onRejected).
 When the promise settles, the appropriate handler will be invoked with that settled value . We can invoke .then() with one, both or neither handler. But if the appropriate handler is not provided, instead of throwing an error,. .then() will just return a promise with the same settled value as the promise it was called on. 

Success and failure Callback functions
*/

const prom = new Promise ((resolve, reject ) => {
    let num = Math.random();
    If (num < .5); {
      resolve ("Yay");
    } else {
      reject ("Ohh nooo!");
    }
  });

  
  
