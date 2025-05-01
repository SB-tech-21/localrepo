//push to combine one array to another array which modifies the original array to which u are pushing
const arr1 =[1,2,3,4,5,6]
const arr2 =[7,8,9]
// console.log(arr1.push(arr2));
console.log(arr1); //[ 1, 2, 3, 4, 5, 6, [ 7, 8, 9 ] ] - here the another array stays as array itself so this is not preferred.


// concat method - this is similar to extend in python combines two arrays but need to defined in a seperate array.

// const arr3 = arr1.concat(arr2)
// console.log(arr3);// [1, 2, 3, 4, 5,6, 7, 8, 9]

// spread method - this lets u combine any number of arrays: syntax ==> [...](three dots and then the array name)
const a4 = [...arr1,...arr2] 
console.log(a4);//[1, 2, 3, 4, 5,6, 7, 8, 9]


// flat method : if there are nested arrays, u need to convert it into a single array, then u use flat method
const a= [1,2,3,[4,5,6],[4,5,6,[2,7,9]]]
console.log(a.flat(Infinity));

// from method : this let u convert anything into arrays like strings
const name ='surjith'
console.log(Array.from(name));// converts the string into array elements.
let c = {surjith : 'Mirthula'}
console.log(Array.from(c));// this will give u empty array bcoz it doesnt know which to convert into array element.

// Array.isarray() - lets u know whether the variable is a array or not
console.log(Array.isArray(name));//false- returns in boolean format


// Array.of() - lets u convert individual elements into array
const s1=100
const s2=200
const s3=300
console.log(Array.of(s1,s2,s3)); // [ 100, 200, 300 ]
