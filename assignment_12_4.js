const malformedJson = '{"name": "Charlie", "age": 20, "isStudent": true'; // Missing closing brace

try {
    const parsedObject = JSON.parse(malformedJson);
    console.log(parsedObject);
} catch (error) {
    console.log("Error parsing JSON:", error.message);
}
