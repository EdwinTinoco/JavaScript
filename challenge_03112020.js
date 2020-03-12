// Write a program that takes two numbers as arguments and returns the largest number
function numbers(num1, num2){
    if (num1 > num2){
        return num1 + " is the largest number"
    }else if (num2 > num1){
        return num2 + " is the largest number" 
    } else {
        return "The numbers are equal"       
    }
}

console.log(numbers(2,9));


// Doug example
var numList = (1, 2, 3, 4);

function largestNumber(){
    return(Math.max(numList))
}

console.log(largestNumber())


// Write a program that will capitalize the first letter in a string
// ex: "ryan is the man" -> "Ryan is the man"
function firstLetterCap(string){
    return result = string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(firstLetterCap('edwin is the man'));
