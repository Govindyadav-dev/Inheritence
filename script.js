// Inheritence= "allows a new class to inherit properties and methods
//  from an existing class( parent se child inherit krta h properties and methods) "
// Inheritence helps with code reusability



class Animal{
    alive= true;

    eat(){
        console.log(`This ${this.name} is eating...`);      
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