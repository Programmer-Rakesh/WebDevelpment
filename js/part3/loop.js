/* 1 Write a 'while' loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named 'sum'. */

let sum = 0;
let i = 1;

while (i<=5) {
    sum += i; 
    i++;
}
console.log(sum);


/* Write a 'while' loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown' */

let countdown = []
let j = 5;
while (j > 0){
    countdown.push(j);
    j--;
}
console.log(countdown);


/* Write a 'do while' loop that prompts a user to enter their favourite tea type until they enter '"stop"'. Store each tea in an array named 'teaCollection'. */

let teaCollection = []
let tea

do {
    tea = prompt(`Enter your favourite tea (type "stop" to finish)`)

    if (tea !== "stop"){
        teaCollection.push(tea);
    }
}while(tea !== "stop");    // It will only run on console


/* Write a 'do while' loop that adds numbers form 1 to 3 and stores the result in a variable named 'total'. */

let total = 0;
let k = 1;

do{
    total += k;
    k++
}while(k <= 3);


/* Write a 'for' loop that multiplies each elememt in the array '[2, 4, 6]' by 2 and stores the result in a new array named 'multipliedNumbers'. */

