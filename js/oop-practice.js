// STEP 1. Create two classes, one called Cat and another called Dog. Both classes should be created using constructor syntax. The Cat class should be created using a named declaration and the Dog class should be created using an anonymous declaration.

// Using named declaration
// class Cat {
// 	constructor(color) {
//         this.color = color;
// 		console.log(`The ${this.color} cat has been created!`);
// 	}
// }
// const ruby = new Cat('white');

// // Using anonymous declaration
// class Dog {
// 	constructor() {
// 		console.log(`The dog has been created!`);
// 	}
// }

// // STEP 2. Create a new instance of the Cat class. Directly underneath, create a new instance of the Dog class.

// const cat2 = new Cat('black');
// const dog = new Dog();

// // STEP 3. Create a new class using constructor syntax called Animal. Create a method within the Animal class that when called, displays the message “The Animal has been created” in the console window. 

// class Animal {
// 	constructor() {
// 		console.log(`The Animal has been created.`);
// 	}
// }
// const animal = new Animal;

// STEP 4.	Now, replicate the above code but this time so that the class accepts an argument and that value is what is displayed in the console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.

// class Animal {
// 	constructor(color, breed, species) {
//         this.breed = breed;
//         this.color = color;
//         this.species = species;
// 		console.log(`The new ${this.color} ${this.breed} ${this.species} has been created.`);
// 	}
// }
// const coco = new Animal('tan', 'terrier', 'dog');

// STEP 5.	Start over and now create a new class using constructor syntax called Animal. Define five properties within your class including properties type, breed, color, height, and length. These properties will be set within the object so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation. 
class Animal {
	constructor(color, breed, height, length, species) {
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
        this.species = species;
// 		console.log(`The new ${this.height} and ${this.length} ${this.color} ${this.breed} ${this.species} has been created.`);
// 	}
// }
// const coco = new Animal('tan', 'terrier', 'short', 'long', 'dog');

// STEP 6.	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.

// NEED TO WORK ON MORE

const Dog = {color: 'tan', breed: 'terrier', height: 'short', length: 'long', species: 'dog'};
let txt = "";
for (let x in Dog) {
  txt += Dog[x] + " ";
}
console.log(Dog);


// STEP 7.	Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.

// STEP 8.	Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a privileged method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”

// STEP 9.	Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph. Remember, you’ll need to add your method to the String object’s prototype.
