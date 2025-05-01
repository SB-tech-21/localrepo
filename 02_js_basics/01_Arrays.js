// Arrays create shallow copies meaning they will be altering the reference point or u can say it as the non-primitive or it comes under the heap method 

const arr = ['Surjith','Sowrish','Amnish','Keerthi']
console.log(arr);

const arr1 = new Array (1,2,3,4,5,6)// if u open this in console u will get a length property along with two prototypes within one another
console.log(arr1);

// ++++++++++++++++++ Array methods ++++++++++++++++++++++

//push - lets u add values to the array its like append in python
arr.push(7)
console.log(arr);

// pop() - used to remove the last item from the array same as in python
arr.pop()
console.log(arr);

// unshift()- used to add item in the zeroth index of array, but its not used bcoz of it changes the indices of all items in the list which will increase the load in the system/computer

arr.unshift(10)
console.log(arr); //[ 10, 'Surjith', 'Sowrish', 'Amnish', 'Keerthi' ]

// shift() - instead of adding item in the zeroth index, this removes the item from there.
arr.shift()
console.log(arr); //[ 'Surjith', 'Sowrish', 'Amnish', 'Keerthi' ]
 
// arrays of js gives u question type of fns
console.log(arr1.includes(6));// this will give u boolean value as output
console.log(arr1.indexOf(5));// this will give u the index of the item, ***note*** - if u give element which is not present it will give u '-1' always.


//join method - this copies the array and gives u a string of the array
const newArr = arr1.join()
console.log(newArr);//1,2,3,4,5,6

// slice and splice
const a=[1,2,3,4,5,6]

const a1= a.slice(1,3)
console.log(a);
console.log('Slice',a1);// just gives u the values at index 1 and 2 ignores the 3rd index Slice [ 2, 3 ]

const a2 = a.splice(1,3)
console.log(a);
console.log('Splice',a2);// gives u the values at index 1,2 and also 3 but this modifies the whole array.
//[ 1, 5, 6 ]-original array
//Splice [ 2, 3, 4 ]- output




