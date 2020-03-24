const toThePowerOf = (base, exponent) => {
    let total = [];
    for (var i=0; i<exponent; i++){
        total.push(base);
    }
    console.log(total);
    return total.reduce((a, b) => a * b);
}

console.log(toThePowerOf(2, 3));