function countBs(word){
    let count = 0;
    for(let i=0;i<word.length;i++){
        if(word[i] == "B"){
            count++;
        }
    }
    return count;
}

function countChar(word,letter){
    let count = 0;
    for(let i=0;i<word.length;i++){
        if(word[i] == letter){
            count++;
        }
    }
    return count;
}

let word = "Bob";
let letter = "o";
console.log(countBs(word));
console.log(countChar(word,letter));