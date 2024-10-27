/*
******************Primitive datatypes********************

7 types : String , number, boolean, null, undefined, symbol,
BigInt

*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


/*
***********************Reference (Non primitive)*****************

Array, Objects, Functions

*/

const heros = ["shaktiman", "naagraj" , "doga"]
let myObj= {
    name: "avantika",
    age : 22,
}

const myFunction = function(){
    console.log("hello world");
}

// console.log(typeof outsideTemp); 
console.log(typeof scoreValue);

/* Type of val-----------Result
undefined ---- "undefined"
null -------- Object
Boolean------boolean
Number--- number
String-------string
Object(native and does not implement)--------object
Object(natibe or host and does implement)
------function


**non primitive datatypes result is always object 

*/

