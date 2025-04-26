//catergorization of Data types:
// Primitive and Non-Primitive

//Primitive: 7 types are there in this:-
// Number, String, Boolean, Null, Undefined, BigInt, Symbol(when u want to classify this in a seperate thing or make it special like using ID)

const number=100
const num=100.3
const id= Symbol('Surjith')
const clgId =Symbol('2020501035')
console.log(id==clgId);

//Non-Primitive / Reference Data types:
//Array, Objects and Functions


const fruits =['apple','orange','pineapple','grapes']

const myFunction= function(){
    console.log(fruits);
}

console.log(typeof fruits)
console.log(typeof myFunction)
myFunction()


// =========================Stack(Primitive) and Heap(Non-Primitive)================================
//In stack, whatever the primitive data types u use will be copied instead of changes in the original value

//Example:-
let color1 = 'brown'
console.log(color1);

let color2 =color1;
console.log(color2);

color2='blue';
console.log(color2);
console.log(color1);// u can see from here there is no changes in the original data.

//In heap, whatever the non-primitive data type is used will not cause changes in the original data.

let user1={
    Name :'Surjith',
    id :'2020501035'
}
console.log(user1);

let user2= user1;
user2.id='2020501034'

console.log(user1.id);
console.log(user2.id);


