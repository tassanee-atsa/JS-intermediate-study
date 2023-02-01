/*Is where program will be executed
Determine what global objects your program can access
Impact how the program run
 
2 RE in JS : 

Browser (frontend)  
- We need modularity as the capacities, size of these scripts grow
- In 2015, use ES6 syntax to implement modules.

Node (backend) process is an object containing data related to the JS file being executed. 
- Purpose is to execute JS without a browser. So we can create a full stack back-front end.
-Give a backend application to access features that are not available to the browser such as server’s file system, database and network.

-process is an object containing data related to the JS file being executed. 
-Process.env is an object containing environment variables.
-To execute, run node my-app.js
*/

/*Modules
Reusable pieces of code in a file that can be exported and imported for use in another file. Reduce repetition. 
Modular program is the one whose components can be separated, used individually and recombined to create a complex system.
Separation of concerns
*/