const box = new class {
    locked = true;
    #content = [];

    unlock() { this.locked = false; }
    lock() { this.locked = true; }

    get content() {
      if (this.locked) throw new Error("Locked!");
      return this.#content;
    }
  };
  function withBoxUnlocked(body) {
    // Check if the box is already unlocked
    const wasLocked = box.locked;

    // Unlock the box if it was locked
    if (wasLocked) {
        box.unlock();
    }

    try {
        // Run the function passed as an argument
        body();
    } finally {
        // Ensure the box is locked again if it was originally locked
        if (wasLocked) {
            box.lock();
        }
    }
}
withBoxUnlocked(() => {
    box.content.push("gold piece"); // Successfully adds "gold piece" to the box
});

try {
    withBoxUnlocked(() => {
        throw new Error("Pirates on the horizon! Abort!"); // Throws an error
    });
} catch (e) {
    console.log("Error raised: " + e); // Logs "Error raised: Pirates on the horizon! Abort!"
}

console.log(box.locked); // → true (The box is locked, as required)
