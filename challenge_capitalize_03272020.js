const someString = "Hi there";

const capitalizeLetters = str => {
    let arrStr = [];
    let newStr = str.split(" ");

    for (let idx in newStr){
        if (newStr[idx] != " "){
            if (idx == 0){
                arrStr.push(newStr[idx].toUpperCase());
            }
        } else {
            arrStr.push(newStr[idx].toUpperCase());
        }
    }
    return newStr;
}

console.log(capitalizeLetters(someString));


// Jordan example
const toCapital = str => {
    const words = str.split(" ");
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
  };
  
  const shortStr = "Hi there";
  toCapital(shortStr); // Hi There
  
  const longStr = "the quick brown fox jumped over the lazy dog";
  toCapital(longStr); // The Quick Brown Fox Jumped Over The Lazy Dog
