const removeFirstLast = someArr => {
    let tempArr = [];
    let counter = 1;
    if (someArr.length >= 3){        
        for (var i in someArr){            
            if (counter > 1 && counter < someArr.length){
                tempArr.push(someArr[i]);
            }           
            counter ++;
        }
    }

    return tempArr;
}

console.log(removeFirstLast([1,2,3,4,5,6]));



// Jordan example
const removeFirstAndLast = arr => {
    if (arr.length >= 3) {
      return arr.slice(1, -1);
    } else {
      throw new Error("You need at least three elements in the array");
    }
  };
  
  console.log(removeFirstAndLast([1, 2, 3, 4])); //?
  console.log(removeFirstAndLast(["<h1>", "Some content", "</h1>"])); //?
  console.log(removeFirstAndLast(["Some content", "</h1>"])); //?