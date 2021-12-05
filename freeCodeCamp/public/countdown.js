// Only change code below this line
function countdown(n) {
	if (n < 1) {
		return [];
	}
	else {
		const countDownArray = countdown(n - 1);
		console.log(countDownArray);
		countDownArray.unshift(n);
		return countDownArray;

	}

}
//console.log(countdown(-1));
//console.log(countdown(10));
console.log(countdown(5));
//countdown(5);




// Only change code above this line