import { checkInventory, processPayment, shipOrder } from './library.js';

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return processPayment(resolvedValueArray)
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return shipOrder(resolvedValueArray)
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});


/*
Chaining multiple promises

Asynchronous programming that multiples promises depend on each other to execute or that must be executed in a certain order called “composition”
ommon mistake : forget to return : nesting promises instead of nesting them , don’t forget to close }) before .then
*/

firstPromiseFunction().
then((firstResolveVal) => {
  return secondPromiseFunction(firstResolveVal);})
.then(secondResoleVal) => {
  console.log(secondResolveVal);}




