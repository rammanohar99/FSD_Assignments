function reduce(arrays) {
    let res = arrays.reduce((acc, current) => acc.concat(current), []);
    return res;
}

arrays = [[1, 2, 3], [4, 5], [6]];
console.log(reduce(arrays));
