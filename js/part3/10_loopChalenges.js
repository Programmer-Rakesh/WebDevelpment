/* `1 Write a 'for' loop that loops through the array '["greean tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds ' "chai" '. store all teas before ' "chai" ' in a new array named ' selectedTeas'. */ 

let teas = ["greean tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for(let i = 0; i < teas.length; i++){
    if(teas[i] === "chai"){
        break;
    }
    selectedTeas.push(teas[i]);
}
console.log(selectedTeas);



/*Write a 'for' loop that loops through the array '["london", "New Year", "Paris", "Berlin"]' and skips '"Paris"'. Store the other cities in a new array named visitedCities. */

let cities = ["london", "New Year", "Paris", "Berlin"];
let visitedCities = []

for( i = 0; i < cities.length; i++) {
    if(cities[i] === "Paris"){
        continue;
    }
    visitedCities.push(cities[i]);
}
console.log(visitedCities)



/* Write a 'for-of' loop to iterate through the array '[1, 2, 3, 4, 5]' and stop when the number '4' is found. Store the Numbers before '4' in ana array anmed 'smallNumbers'.*/