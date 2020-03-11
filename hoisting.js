// Hoisted
var name;
name = 'Kristine';
console.log(name); // 'Kristine'


// Initializers not hoisted
console.log(age); // undefined
var age = 33;