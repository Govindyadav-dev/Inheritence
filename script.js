// Inheritence= "allows a new class to inherit properties and methods
//  from an existing class( parent se child inherit krta h properties and methods) "
// Inheritence helps with code reusability

// JavaScript is not truly class-based. It is a prototypal language. 
// The class syntax introduced in ES6 is just syntactic sugar 
// over the existing prototype-based inheritance. 
// Under the hood, JavaScript still uses prototype chains to handle inheritance and method sharing."

class Animal{
    alive= true;

    eat(){
        console.log(`This ${this.name} is eating...`);      
    }

    dead(){
        console.log(`This ${this.name} is dead...`);      
    }

    sleep(){
        console.log(`this ${this.name} is sleeping...`);
    }
}



class Rabbit extends Animal{
    name= "rabbit";

}



class Fish extends Animal{
    name= "fish";

    swim(){
        console.log(`this ${this.name} is swimming`);
        
    }
}



// object bnta h  constructor se and reuse hota h inheritence se..
const rabbit= new Rabbit();
const fish= new Fish();

rabbit.sleep()
rabbit.eat()
//rabbit.swimming() // error aega kyuki ye to khud hi ek child hai and swim rabbit ka method nai h 
//agar upr linee error degi to usko htao wnna niche ka code rn nai karega
fish.swim()
fish.eat()
fish.sleep()



// JavaScript is not truly class-based. It is a prototypal language. 
// The class syntax introduced in ES6 is just syntactic sugar 
// over the existing prototype-based inheritance. 
// Under the hood, JavaScript still uses prototype chains to handle inheritance and method sharing."


//What actually happens behind the scenes?

//When you write:

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log("Hi " + this.name);
  }
}

//JavaScript internally converts it roughly to:

function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  console.log("Hi " + this.name);
};