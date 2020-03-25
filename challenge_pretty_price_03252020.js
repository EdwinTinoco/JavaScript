// prettyPrice(3.50, 0.95) // 3.95

const prettyPrice = (num1, num2) => {
    return Math.floor(num1) + num2; 

}

console.log(prettyPrice(3.50, 0.95));
console.log(prettyPrice(100, 0.95));



// Jordan example
const prettyPrice = (grossPrice, extension) => {
    if (Number.isInteger(extension)) {
      extension = extension * 0.01;
    }
    return Math.floor(grossPrice) + extension;
  };
  
  prettyPrice(2.2, 0.95); //?
  prettyPrice(2.2, 95); //?
  prettyPrice(2.2, 0); //?
  prettyPrice(2.2, 99); //?