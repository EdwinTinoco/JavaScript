let playerOne = 'Tiffany';
let playerTwo = 'Kristine';

let tempPlayerOne = playerOne;
let tempPlayerTwo = playerTwo;

playerOne = tempPlayerTwo;
playerTwo = tempPlayerOne;

// este es el swap, es mas facil sin tener que crear variables temporales
[playerOne, playerTwo] = [playerTwo, playerOne];

console.log(`
Player One: ${playerOne}
Player Two: ${playerTwo}
`);



function roadRage() {
    let rightLane = "Chevy";
    let leftLane = "Honda";
    
    [rightLane, leftLane] = [leftLane, rightLane]
    
    return (`That ${rightLane} and ${leftLane} won't pick a lane`)
}

console.log(roadRage());