function rangeOfNumbers(startNum, endNum) {

	if (endNum < startNum) {
		return [];
	}
	else {
		let rangeArray = rangeOfNumbers(startNum, endNum - 1);
		console.log(rangeArray);
		rangeArray.push(endNum);
		return rangeArray;
	}

};

console.log(rangeOfNumbers(4,6));