// prettyPrice(3.50, 0.95) // 3.95

const prettyPrice = (num1, num2) => {
    return Math.floor(num1) + num2;    
}

console.log(prettyPrice(100, 0.95));