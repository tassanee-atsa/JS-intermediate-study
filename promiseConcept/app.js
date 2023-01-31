/*
What is Promise ?
Promises are objects that represent the eventual outcome of an asynchronous operation. Can be one of these 3 states.
Pending -  initial state - operation has not completed yet
Fulfilled - The operation has completed successfully and the promise now has its resolved value.
Reject - The operation has failed and the promise has the reason for failure. This reason is usually an Error if some kind.

Settled → fulfilled or rejected.

Construction a Promise object:
*/

const executorFunction = ( resolve, reject) => {  } ;
const  myFirstPromise = new Promise(executorFunction);


/*
Refer to resolve() → change the promise’s status from pending to fulfilled :
reject () → change the promise’s status from pending to rejected. 

*/
const myExecutorFunction = (resolve, reject ) => {
    If (someCondition); {
       Resolve ("I resolved!");
      } else { reject ( "I rejected");
    }
}
  
  const mysecondPromise = new Promise (executorFunction);
  