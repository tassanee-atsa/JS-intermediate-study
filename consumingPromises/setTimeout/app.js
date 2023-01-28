/*
setTimeout () is a Node API that uses callback functions to schedule tasks to be performed after a delay.

Const delayedHello = () => {
  console.log(“ Hi, this is an asynchronous greeting!);
};

setTimeout (delayedHello, 3000);

We invoke setTimeout () with the callback function. In at least 3 seconds delayedHello will be invoked. 

This delay is performed asynchronously- the rest of the program won’t stop executing during the delay. Asynchronous Javascript uses something called event-loop. After 3 secs, delayedHello() is added to a line of code waiting to be run. Before it can run, any synchronous code from the program will run.Next, any code in front of it in the line will run. This means it might be more than two seconds before delayedHello() is actually executed.
*/
