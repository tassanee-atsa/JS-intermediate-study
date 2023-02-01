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

/*static generateName(){ 
}

 animal. generateName() 

constructor() is called when you create a new instance of a class. It sets the property values for each instance. If the class inherits properties from the parent class, then it will call super to pass arguments to the parent’s constructor()

The subclass inherits all of the parent’s getters, setters, and methods. You can also use the super keyword to set properties in the parent class. Although the subclass inherits the parent methods, you need to use the super keyword to set the parent properties.

The super keyword is used in subclasses to call a parent constructor().
Classes made it easy to create multiple objects that share property names and methods.

Purpose of inheritance is to share data and methods between objects.*/
