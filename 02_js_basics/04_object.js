const obj1 = new Object () // this is called the singleton and it creates a singleton ("If I ask for water multiple times, I keep getting the same bottle—not a new one every time.")


console.log(obj1);// this will give u an empty object. 

const obj2 ={}// this will also create an empty object only but this is not a singleton

// to give new items or entries inside the newly created object.
obj2.name ='surjith'
obj2.age =22
obj2.email = 'surjithbaig09@gmail.com'

console.log(obj2);// in this way u can create an empty object and add items to them, but remember that if u want to use symbol then u have declare that symbol seperately then use it as key in the object item

const regualar_data ={
    fullname : {
        username:{
            first_name: 'surjith',
            last_name: 'Baig'
        }
    }
}
console.log(regualar_data.fullname.username.first_name);
const o1 = {1:'a',2:'b'}
const o2 = {3:'c',4:'d'}

// const o3 = Object.assign({},o1,o2)// this is one way to concat two objects, but theres a catch here that the first object is the target and others are sources so all the sources will be added to the o1, instead of that u can put an empty object in the first, then it will be like a new obj.
// console.log(o3);

// another method is using spread [...]
const o3 = {...o1,...o2}
console.log(o3);

console.log(Object.keys(o3));// this gives the keys in terms of an array.
console.log(Object.values(o3));// this gives the values in terms of an array.
console.log(Object.entries(o3));// this give key-value pair in terms of an array.




