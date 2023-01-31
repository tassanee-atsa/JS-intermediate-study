//When different classes share the same properties or methods. Some classes may have additional properties. 
//They are candidates for inheritance → a tool we use to reduce the amount of code. We create a parent class or superclass and have multiple children classes.

class Cat extends Animal {
    constructor(name, usesLitter){
      super(name);
      this._useLitter = usesLitter;
     }
}

//Children class inherit both properties and methods from the parent class.
//Child class can contain their own properties and methods.

//Static Method → can not call from the instance but can call directly from the class. Eg in Animal class —>

