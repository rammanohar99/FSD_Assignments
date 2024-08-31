function every(array, test) {
    for (let element of array) {
        if (!test(element)) {
            return false; // If any element fails the test, return false
        }
    }
    return true; // If all elements pass the test, return true
}

console.log(every([1, 3, 5], n => n < 10)); // → true
console.log(every([2, 4, 16], n => n < 10)); // → false
console.log(every([], n => n < 10)); // → true
