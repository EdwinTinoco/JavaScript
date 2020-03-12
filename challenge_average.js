// Write a program that finds the average 

function average(num_array){
    counter = 0;

    for (num of num_array){
        counter += num;    
    }
    
    return counter/num_array.length
}

console.log("The average is: ",average([1,2,3]))