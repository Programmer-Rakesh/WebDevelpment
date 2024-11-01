// Number

let balance = 120;
let anaotherBalance = new Number(120)

console.log(balance);          // Will print "120"
console.log(anaotherBalance.valueOf());  // Will print "120"

console.log(anaotherBalance);  // Will print "Number: 120"

console.log(typeof balance);   // Prints the type of data "Number"
console.log(typeof anaotherBalance);   // Prints the type of data "Object"

// Boolean

let isActive = true
let isReallyActive = new Boolean(true) // Not recomended

// Null and undefined

let firstname = null;
let middlename;
let lastname = undefined;
console.log(firstname);      // null
console.log(middlename);     // undefined
console.log(lastname);       //undefined