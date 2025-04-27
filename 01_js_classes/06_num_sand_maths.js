const score =400
// console.log(score);

const balance =new Number(400)
// console.log(balance); // this will give u output specifying that its Number

// console.log(balance.toString().length); //converts the num into string
// console.log(balance.toFixed(3));// gives u the decimal count behind the number, this too gives string


const newNumber= 1234.56
// console.log(newNumber.toPrecision(7));// this helps u to round-off the digits but gives the output as string

const thousands = 1000000
// console.log(thousands.toLocaleString('en-IN'));// this helps u to put comma to the zero in indian standard but this also gives string values



// ++++++++++++++++++++++ Maths ++++++++++++++++++++++++
// console.log(Math);// Math is an object ==>Object [Math] {}

const num1 = -4.56
// console.log(Math.abs(num1));// gives u the positive value 
// console.log(Math.ceil(num1));// gives u the upper value 
// console.log(Math.floor(num1));// gives u the lower value
// console.log(Math.round(num1));// rounds of based on normal standards.

// Random function

console.log(Math.random());// random fn always give number between 0 and 1
console.log(Math.random()*10);// this will shift the number to left side so that we get the desirable decimal
console.log(Math.floor(Math.random()*10));// this will give u single number instead of decimal values
console.log(Math.floor(Math.random()*10)+1)// this will make sure that the minimum value u get is atleast 1

//so to get a generalized formula
const min=10
const max=20
console.log((Math.random()*(max-min)))// in this step we are mutliplying to get the range from min to max
console.log((Math.random()*(max-min))+min);// we are adding to get the minimum value as 10
console.log(Math.floor(Math.random()*(max-min))+min);// finally a floor to get the rounded value
console.log(Math.round(Math.random()*(max-min))+min)