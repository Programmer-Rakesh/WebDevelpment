const username = {
    firstname: "rakesh",
    "middle name" : "nil",
    isLoggedin: true,
};

username.firstname = "hapsi"
username.lastname = "okay"

console.log(username.firstname);
console.log(username["middle name"]);
console.log(username.lastname);
console.log(username);
console.log(typeof username);

let today = new Date();
console.log(today.getDate());   // 4 

let anotherUser = ["rakesh", true];
console.log(anotherUser[0]);    // Will print rakesh

let isValue = true;  // JS consider true as 1 & false as 0
console.log(1 + "1");   // will print 11
console.log(isValue + 1);   // Will print 2


let isValue1 = "2abc";
console.log(typeof Number(isValue1));   // It will print "Number"
console.log(Number(null));