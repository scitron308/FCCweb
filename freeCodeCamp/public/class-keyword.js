// Use class Syntax to Define a Constructor Function
//The constructor method is a special method for creating 
//and initializing an object created with a class. 
class Vegetable {
	constructor(name) {
		this.name = name;
	}
}
// This constructor is invoked when new is called to create a new object.

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'