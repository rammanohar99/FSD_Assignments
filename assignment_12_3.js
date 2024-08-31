function division(a,b){
    try{
        if(b == 0){
            throw new Error("Division by zero is not allowed");
            }
        let result = a/b;
        return `Result: ${result}`;
    }
    catch(error){
        return `Error: ${error.message}`;
    }
}

console.log(division(10,0));