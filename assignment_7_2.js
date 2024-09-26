// normal way to do using built in function reverse method
// function reverseArray(myArray){
//     result = myArray.reverse();
//     return result;
// }

// function reverseArrayInPlace(arrayValue){
//     result1 = arrayValue.reverse();
//     return result1;
// }

// let myArray = ["A","B","C"];
// console.log(reverseArray(myArray));

// let arrayValue = [1,2,3,4,5];
// console.log(reverseArrayInPlace(arrayValue));

function reverseArray(myArray) {
    let result = [];
    for (let i = myArray.length - 1; i >= 0; i--) {
        result.push(myArray[i]);
    }
    return result;
}

function reverseArrayInPlace(arrayValue){
    for(let i = 0;i < Math.floor();i++){
    }
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
