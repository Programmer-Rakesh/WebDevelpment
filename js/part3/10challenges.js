/*
1. Declare an array named 'teaFlavours' that contains the strings '"green tea"', '"black tea*', and '"oolong tea"'.
Access the first element of the array and store it in a variable named 'firstTea'.
*/

let teaFlavors = ["gren tea", "black tea", "oolong tea"];
const firstTea =  teaFlavors[0];


/*
2. Declare an array named 'cities' containing '"London"', '"Tokyo"', '"paris"', and '"New York"',
Access the third element in the array and store it in a variable named 'favoriteCity'
*/

let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];


/*
4. Declare an array named 'citiesVisited' containing '"Mumbai"' and '"Sydney"'.
Add '"Berlin"' to the array using the 'push' method.
*/

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
//or:
// citiesVisited[2] = "Berlin";



/*
5.You have an array named 'teaOrders' with '"chai"', '"iced tea"', '"matcha"', and '"earl greay"'.
Remove the last element of the array using the 'pop' methode and store it in 
a variable named 'lastOrder'.
*/

let teaOrders =["chai", "iced tea", "earl greay"];
teaOrders.pop();