let score = "Surjith"

// console.log(score);
// console.log(typeof score);

let convertedScore = Number(score)
// console.log(convertedScore);
// console.log(typeof convertedScore);
/*
null=>number will give u 0 as the value
String(number) => number will give the number
Pure String => number will give NaN
Undefined => number will give NaN

all of these conversion will show the type as number but the values will not be number so have to be careful in it.
*/

// Boolean Conversion
let could = undefined

// console.log(could);
// console.log(typeof could);

let convertedName = Boolean(could)
// console.log(convertedName);
// console.log(typeof convertedName);

/*
null=>Boolean will give u false as the value
String(number) => Boolean will give the True
Pure String => Boolean will give True
Undefined => Boolean will give False

all of these conversion will show the type as Boolean but the values will be either True / False so have to be careful in it.
*/


// ========================OPERATIONS===========================
// let num=100
// console.log(num);
// x=++num //if u are using prefix ++ then first the increment will be done then the assignment of that value will be done.
// console.log(x);
// console.log(num);

let a=100
console.log(a);
b=a++ //if u are using postfix ++ then the assignment of the value along with the increment will be done but the value will remain same. Since the value is updated later, the value of b is still 100 and not 101. so this is the difference.
console.log(b);
console.log(a);

