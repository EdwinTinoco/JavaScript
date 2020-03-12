// Write a program that finds the average 

function average(num_array){
    let sum = 0;

    for (let num of num_array){
        sum += num;    
    }
    
    return sum/num_array.length
}

console.log("The average is: ",average([1,2,3]))


// Ryan example
const getAverage1 = arr => {
    let sum = 0;

    for (let i=0; i < arr.length; i++){
        sum += arr[i]; 
    }
    
    return sum/arr.length
}

console.log("The average is: ",getAverage1([1,2,3]))



//Jordan example
const getAverage = arr => {
    const reducer = (total, currentValue) => total + currentValue;
    const sum = arr.reduce(reducer);

    return sum / arr.length;    
}

console.log(getAverage([1,2,3]));
