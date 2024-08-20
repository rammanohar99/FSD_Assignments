function range(start,end){
    let result = []
    for(start;start<=end;start++){
        result.push(start);
    }
    return result
}

function sum(start,end){
    let totalvalue = 0
    for(start;start<=end;start++){
        totalvalue = start + totalvalue;
    }
    return totalvalue;
}

console.log(range(1,10).join(', '));
console.log(sum(1,10));