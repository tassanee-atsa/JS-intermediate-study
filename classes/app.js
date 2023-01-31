//JS is an OOP 
//Classes reduce duplicate code and debugging time.
//constructor method & create instance 

class Hello {
    constructor(name){
     this._name = name;
     This._behavior = 0;}
 
    get name() {
      return this._name;
 }
 
    get behavior() {
     return this._behavior;
 }
 
   incrementBehavior() {
     This._behavior++ ;
 }
 }
  const  helloInstance = new Hello ("tass");
 helloInstance.incrementBehavior()
 console.log(helloInstance.behavior) // result is 1   

 //no comma between method
 
 
 