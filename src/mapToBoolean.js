function mapToBoolean(arr) {
    return arr.map(value => !!value);
}

console.log(mapToBoolean([0, "hello", "", NaN, 42, {}, []]));