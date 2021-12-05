const HIGH_TEMPERATURES = {
	yesterday: 75,
	today: 77,
	tomorrow: 80
};
//const today = HIGH_TEMPERATURES.today;
//const tomorrow = HIGH_TEMPERATURES.tomorrow;
const { today, tomorrow } = HIGH_TEMPERATURES;

//assign variables from objects
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
console.log(today + " " + tomorrow);
console.log(highToday + " " + highTomorrow);
/*------------------------------------*/
const LOCAL_FORECAST = {
	yesterday: { low: 61, high: 75 },
	today: { low: 64, high: 77 },
	tomorrow: { low: 68, high: 80 }
};
//const lowToday = LOCAL_FORECAST.today.low;
//const highToday = LOCAL_FORECAST.today.high;

// Assign Variables from Nested Objects
const { today: { low: lowToday, high: todayHigh } } = LOCAL_FORECAST;
console.log(lowToday + " " + todayHigh);
/*------------------------------------*/
//Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
console.log(`Before\ta: ${a} b: ${b}`);
[a, b] = [b, a];
console.log(`After\ta: ${a} b: ${b}`);

/*------------------------------------*/
//Assignment with the Rest Parameter to Reassign Array Elements
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
	const [, , ...arr] = list;
	return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
/*------------------------------------*/
//Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max, min}) => 
  (max + min) / 2.0; 
// Only change code above this line
console.log(half(stats));




