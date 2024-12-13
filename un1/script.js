let cities = ["a", "b", "c", "d"];
let heroes = ["a", "b", "e"];

let setCities = new Set(cities);

let missingFromCities = heroes.filter(hero => !setCities.has(hero));

console.log("Missing elements from cities:", missingFromCities);
