const weights = {
    green: 1,
    yellow: 2,
    red: 3
}

const weightedLottery = weights => {    
    for (const [key, val] of Object.entries(weights)) {
        for (var i=0; i<val; i++){
            console.log(key);
        }        
    } 
}

weightedLottery(weights);


// Jordan example
const weightedLottery = weights => {
    let containerArray = [];
  
    Object.keys(weights).forEach(key => {
      for (let i = 0; i < weights[key]; i++) {
        containerArray.push(key);
      }
    });
  
    return containerArray[(Math.random() * containerArray.length) | 0];
  };
  
  const weights = {
    green: 1,
    yellow: 2,
    red: 3
  };
  
  weightedLottery(weights);   