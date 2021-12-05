const result = {
	success: ["max-length", "no-amd", "prefer-arrow-functions"],
	failure: ["no-var", "var-on-top", "linebreak"],
	skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
	// Only change code below this line
	const failureItems = [];
	for (let i = 0; i < arr.length; i++) {
		failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
	}
	// Only change code above this line
	return failureItems;
}
const failuresList = makeList(result.failure);

console.log(failuresList);
/*------------------------------*/
//Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) =>
	({ name, age, gender });

console.log(createPerson("Zodiac Hasbro", 56, "male"));

//Write Concise Declarative Functions
const bicycle = {
  gear: 2,
  setGear(newGear) { // setGear: function(newGear)
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);

