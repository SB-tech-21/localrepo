//different methods for dates
let myDate = new Date()
// console.log(myDate);// 2025-04-27T14:50:05.788Z- this gives an unreadable output (or they call it as isostring format)
// console.log(typeof myDate); //object - mydate or Data() is an object

//now comes the different formats for the dates (these formats give the instant time)
// console.log(myDate.toDateString());// Sun Apr 27 2025
// console.log(myDate.toLocaleDateString());// 4/27/2025
// console.log(myDate.toISOString());// 2025-04-27T14:53:20.302Z
// console.log(myDate.toLocaleString());// 4/27/2025, 2:54:09 PM


//++++++++++++++++++++++ To give our own Timeline +++++++++++++++++++++++

// let myNewDate = new Date(2025,0,15)
// console.log(myNewDate.toDateString()); // Wed Jan 15 2025
// console.log(myNewDate.toLocaleDateString())// ; 1/15/2025
// console.log(myNewDate.toLocaleString()) // 1/15/2025, 12:00:00 AM

let myNewDate = new Date('2025-02-29')
// console.log(myNewDate.toDateString()); // Sat Mar 01 2025
// console.log(myNewDate.toLocaleDateString())// ; 3/1/2025
// console.log(myNewDate.toLocaleString()) // 3/1/2025, 12:00:00 AM

let mytimestamp = Date.now()
// console.log(mytimestamp);// 1745766995084 - this is value in terms of milliseconds
//to convert into seconds

// console.log(Math.round(mytimestamp/1000)); // 1745767065 - value in terms of seconds

let newDate = new Date()// for this we have to make sure that we create a object
// console.log(newDate.getDay()+1);
// console.log(newDate.getMonth()+1);


console.log(newDate.toLocaleString('default',{
    dateStyle : "long"}));// lets u control the format of the output u want
 

