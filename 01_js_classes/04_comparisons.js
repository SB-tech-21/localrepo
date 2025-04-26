// comparison operators are usually <,>,<=,=> and ==

// comparison between different datatypes causes problems ()
// console.log('3'+2);
// console.log('3'+2+2);// here the precendence operators come into play 
// console.log(3+2+'5');

//null method

// console.log(null>1);// normally js takes null value as 0 so here it shows false
// console.log(null<1);// here it is true
// console.log(null>=1);// same as the above reason
// console.log(null<=1);// here it is less than 1 so it is true.
// console.log(null==0);// suprisingly u will get false here bcoz js assumes null as non-zero.(coz of the equality)


console.log('2'==2);// normal checking - 'this will give u true'
console.log('2'===2);// strict checking - this will give u false bcoz it checks the datatype also.
