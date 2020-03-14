// Write a JavaScript program that will create a new array from the two that are given.
// The new arary should include every possible combination between the two supplied.
// IE: [1, 2], ["a", "b"] => [[1, "a"], [1,"b"], [2, "a"], [2, "b"]]
arrOne = [1, 2];
arrTwo = ["a", "b"]

const arrCombination = (arr1, arr2) => {   
    const combinedArr = []

    for (var i in arr1){               
        for (var j in arr2){
            arrTemp = [];
            arrTemp.push(arr1[i]);
            arrTemp.push(arr2[j]);
            combinedArr.push(arrTemp);
        }     
    }
    return combinedArr
}

console.log(arrCombination(arrOne, arrTwo));


// Ryan example
function mixedArrays(arr1, arr2){
    const combined = []

    arr1.forEach(element => {
        arr2.forEach(i =>{
            combined.push([element,i])
        })
    });

    return combined
}

console.log(mixedArrays(arrOne, arrTwo))