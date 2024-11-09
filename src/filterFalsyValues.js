function filterFalsyValues(arr) {
    return arr.filter(value => value); 
}

console.log(filterFalsyValues([0, 1, "", "hello", null, undefined, false, 42]));