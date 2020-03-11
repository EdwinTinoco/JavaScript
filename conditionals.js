var age = 10;
var ageTwo = '12';

if (age === ageTwo) { // best practice: es mejor siempre usar tres equals porque checa tambien el tipo de dato
  console.log('They are equal');
}

if (age !== ageTwo) {
  console.log('Not equal');
}

if (age >= 25) {
  console.log('Old enough to rent a car');
}

if (age <= 10) {
  console.log('You can eat from the kid menu');
}


var age = 30;

if (age <= 10) {
  console.log('You can eat from the kid menu');
} else {
  console.log('Adult menu time for you');
}