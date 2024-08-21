function loop(value, test, update, body) {
    while (test(value)) {  // Continue looping as long as the test function returns true
        body(value);       // Execute the body function with the current value
        value = update(value); // Update the value using the update function
    }
}

loop(3, n => n > 0, n => n - 1, console.log);