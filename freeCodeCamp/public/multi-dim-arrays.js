/**using any combination of strings, numbers, and booleans for data elements, 
so that it has exactly five levels of depth (remember, the outer-most array is level 1). 
Somewhere on the third level, include the string deep, on the fourth level,
 include the string deeper, and on the fifth level, include the string deepest. */

let myNestedArray = [
	// Only change code below this line
	['unshift', ['level3', 'deep', ['level4', 'deeper', ['level5', 'deepest']]], false, 1, 2, 3, 'complex', 'nested'],
	['loop', 'shift', 6, 7, 1000, 'method'],
	['concat', false, true, 'spread', 'array'],
	['mutate', 1327.98, 'splice', 'slice', 'push'],
	['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
	// Only change code above this line
];
console.log(myNestedArray[0][1][2][2][1]);