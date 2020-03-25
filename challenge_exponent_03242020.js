const toThePowerOf = (base, exponent) => {
    let total = [];
    for (var i=0; i<exponent; i++){
        total.push(base);
    }
    console.log(total);
    return total.reduce((a, b) => a * b);
}

console.log(toThePowerOf(2, 3));


// Jordan example
const toThePowerOf = (num, exp) => {
    const items = Array(exp).fill(num);
    const reducer = (total, currentValue) => total * currentValue;
    return items.reduce(reducer);
}

console.log(toThePowerOf(2, 3));

// Ryan example
const toThePowerOf = (num, exp) => {
    const baseArr = num.toString().repeat(exp).split('');
    const reducer = (baseArr, idx) => baseArr * idx;
    return baseArr.reduce(reducer);
}

console.log(toThePowerOf(2, 3));