/**
 *  Inheritance is the concept of one thing gaining the properties
  or behaviours of something else.
  EX : Animals eat method is taken by Bird
 */

function Animal() {}; // This is the Animal *Type*
Animal.prototype.eat = function () {
    console.log("All animals can eat!");
};

function Bird() {}; // Declaring a Bird *Type*
Bird.prototype = new Animal(); // Birds inherit from Animal
Bird.prototype.fly = function() {
    console.log("Birds are special, they can fly!");
};

var aBird = new Bird(); // Create an instance of the Bird Type
aBird.eat(); // It should alert, so the inheritance worked
aBird.fly(); // Important part of inheritance, Bird is also different to Animal

var anAnimal = new Animal(); // Let's check an instance of Animal now
anAnimal.eat(); // Alerts, no problem here
anAnimal.fly(); // Error will occur, since only Birds have fly() in its prototype

/*
output:==
C:\Users\sai rachana\Desktop\nodejsprograms> node inheritex.js
All animals can eat!
Birds are special, they can fly!
All animals can eat!
C:\Users\sai rachana\Desktop\nodejsprograms\inheritex.js:18
anAnimal.fly(); // Error will occur, since only Birds have fly() in its prototype

 */