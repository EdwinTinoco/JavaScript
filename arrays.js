var generatedArray = new Array(3); // [undefined, undefined, undefined]

var literalArray = [1, 2, 3];

var mixedArray = ['Hi', 1, ['a', 'b', 'c'], { name: 'Kristine' }, function greeting(){console.log('Hey there');}];

console.log(generatedArray)

var literalArray = ['Altuve', 'Correa', 'Spring'];
literalArray[0]; // "Altuve"

var playerName = literalArray[1];
playerName; // "Correa"

var mixedArray = ['Hi', 1, ['a', 'b', 'c'], { name: 'Kristine' }, function greeting(){console.log('Hey there');}];
mixedArray[2][2]; // "c"
mixedArray[3]; // Object {name: "Kristine"}
mixedArray[3].name; // "Kristine"
mixedArray[4]; // function greeting( ) { console.log('hey there');}
mixedArray[4](); // hey there