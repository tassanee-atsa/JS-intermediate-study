/*Using catch() with promise

Seperation of concerns → writing the clean code→ oganising code into distinct sections each handling a specific task → quickly navigate our code

Instead of passing 2 handler into one. We can chain the second .then to the first. To be more readable we use .catch() function with the failure handler.
*/

prom. then ((resovledValue) => {
    console.log(resolvedValue)})
    .catch((rejectionReason) => {
    console.log(rejectionReason) })


