// singleton - when u declare as literals then singletons wont be created but when u are using constructor then singletons will always be created.

// object literals

let mySmp = Symbol('mykey') // here we have created a symbol and we needed to give this symbol as an input key
const obj ={ // this is one way to create an object
    name:'Surjith',
    age : 21,
    blood_grp : 'A1+' ,
    [mySmp] : 'Baig' // this is the syntax to give input as a symbol key.
}

console.log(obj.age);
console.log(obj['age'])
console.log(obj[mySmp]);//  this is the method to call it
console.log(typeof obj[mySmp]);
console.log(obj['blood_grp']);

// Object.freeze(obj)
obj.age =22
console.log(obj['age']);// 21 - the result is still the same as u can see since we used the object freeze method.


obj.greeting = function() {
    console.log('Hello JsUser');    
}
console.log(obj.greeting());// undefined - this gives undefined bcoz we freezed it,after unfreezing we get the "Hello JsUser"


obj.greetingTwo = function() {
    console.log(`Hello JsUser, ${this.name}`);// if u want to access the keys inside the object, we have to use "this"  
}
console.log(obj.greetingTwo()); // so if u want to display this u have use the () just like u do for function callings.