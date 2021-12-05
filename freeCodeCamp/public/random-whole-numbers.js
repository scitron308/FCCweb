function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random()*(myMax - myMin +1)) + myMin;
  // Only change code above this line
}
console.log(randomRange(2, 9));
console.log(randomRange(8, 12522));