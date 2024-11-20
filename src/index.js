
//It's tecnically an anonymous function: Are we assigning the anonymous function to a variable
const doubleTheNums = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
  return arr;
};

console.log(doubleTheNums.name)

// no longer an anonymous function
function doubleTheNums(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
  return arr;
};

// convert above function to an arrow function
// The parentheses around the paremeter is only mandatory if there is more or less than one parameter.

const doubleTheNums = arr =>{
	for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
  return arr;
}
let list1 = [1,2,3,4]
console.log(doubleTheNums(list1))


// Write a function that prints out "Good morning, class!"
const greeting = () => console.log('Good morning, class!') //prints
const greeting = () => "Good morning, class!"; //returns


// Write a function that prints a random number (integer) between 1 and 100.
const randomNum = () => console.log(Math.floor(Math.random() * 100) + 1);

const random1To100 = () => Math.floor(Math.random()*101)

const randomNum = () => {
	randNum = Math.floor(Math.random() * 100) +1
	console.log(randNum)
	// return randNum;
}

randomNum() 
random1To100()

// use one of the functions above as the action parameter when you invoke the callback function below
// The function: Prints whatever the callback function of action does num times
const doMultipleTimes = (action, numTimes) => {
  for (let i = 0; i < numTimes; i++) {
    console.log(action());
  }
};
doMultipleTimes(randomNum, 7);


// Closure example similar to the idea of a global function.

let powersOf2 =1;

doMultipleTimes( () => {
	const currPower = powersOf2;
	powersOf2 *= 2;
	return currPower;
}, 10)

// Another example with a more explict closure 
const powerFactory = () => { //Outer function
	let powersOf2 = 1;
	
	return () => { //Inner funciton
		const currPower = powersOf2;
		powersOf2 *= 2;
		return currPower;
	}
};

doMultipleTimes(powerFactory(), 10)


// don't need to wrap with the curl braces. The ? means return. And is only possible because There is a condition in this function.
//when we have explict return then we need to wrap with curlbraces
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
const fn = (arg0, arg1) => (arg0 <= arg1) ? arg0 : arg1

// returning an object with multiple attributes
const fn = (arg0, arg1) => ({arg0 <= arg1})

console.log(fn(1,2))

// A way to trick the console log and making acts like a print statement
const print = console.log;

//basic sytax for arrow functions
const fn = () => {}
