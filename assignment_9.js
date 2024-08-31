// Example 1: Converting an Array of Numbers from Celsius to Fahrenheit using map()
const celsiusTemps = [0, 10, 20, 30, 40];
const fahrenheitTemps = celsiusTemps.map(function(temp) {
    return temp * 9/5 + 32;
});
console.log(fahrenheitTemps); // Output: [32, 50, 68, 86, 104]

// Example 2: Finding the Maximum Value in an Array using reduce()
const numbers = [10, 5, 20, 15];
const max = numbers.reduce(function(accumulator, currentValue) {
    return currentValue > accumulator ? currentValue : accumulator;
}, numbers[0]);
console.log(max); // Output: 20

//Example 3: Filtering Objects Based on a Property using filter()
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 28 }
];
const adults = people.filter(function(person) {
    return person.age >= 30;
});
console.log(adults); // Output: [ { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 } ]

