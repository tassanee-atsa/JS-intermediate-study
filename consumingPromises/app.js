/*
An initial state of promise is pending.  But we have a guarantee that it will settle.

.then() method allows us to say. I have a promise, when it settles, then here is what I want to happen..

.then() is a higher-order function that takes two callback functions as arguments → success or failure handlers (onfulfilled, onRejected).
 When the promise settles, the appropriate handler will be invoked with that settled value . We can invoke .then() with one, both or neither handler. But if the appropriate handler is not provided, instead of throwing an error,. .then() will just return a promise with the same settled value as the promise it was called on. 

*/