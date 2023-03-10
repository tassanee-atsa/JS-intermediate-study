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

Implementation of Modules in JS:

In brower’s runtime environment : ECMAScript6(ES6)  import/export
 export { a, b };
export const a = () => {}
export const b = () => {}

Import {a,b} from “./…”
Remaining imports to avoid naming collisions → import { x as newA } from ‘./…’
Import {x as newB} from ‘./…’

Default values– > 
Const z = {x, y}
export { z as default }; shorthand is export default Z;

Import {default as z} ; shorthand is Import z from ‘./…’
Const {x, y} = z;

            * *Have to update <script type =”module” src=”./….”></script>
Const {x,y } = z ; is ES6 destructuring syntax.

In node runtime environment : module.exports and require() → 2 writing ways

function nameX () = {...};
module.exports.nameX = nameX;

module.exports.nameX = function(){..}

Or module.exports.nameX =() =>{...};

Or module.exports = {funcX, funcY};
—-----------------------

const nameA = require(‘accept string : is the file path’)
This means that the entire module.exports object is stored in nameA : any functions that are exported can be used here.

Using object Destructuring to be more selective with require()
Const {nameX, nameY} = require(‘....’);

Ways to extract value out of an object.
Const {valueA, valueB} = object;
Or const {valueA} = object.valueA;
const {valueB} = object.valueB;

*/