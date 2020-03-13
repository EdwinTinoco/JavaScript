// Same function written as function declaration
function fullName (fName, lName) { 
    console.log(`${lName}, ${fName}`);
  }
  fullName('Tiffany', 'Hudgens');


  
  // Same function written as function expression with arrow
  fullName = (fName, lName) => { 
    console.log(`${lName}, ${fName}`);
  }
  fullName('Kristine', 'Hudgens');

// Same function written as function expression without arrow
  fullName = function(fName, lName) { 
    console.log(`${lName}, ${fName}`);
  }
  fullName('Kristine', 'Hudgens');


  
  // Basic arrow function
  helloWorld = () => { console.log("Hi there"); }
  helloWorld();
  
  // Arrow function with shorthand function argument for single arguments
  firstName = fname => { console.log(fname.toUpperCase()); }
  firstName('Jordan');
  
  // Arrow function with multiple arguments
  fullName = (fName, lName) => { console.log(`${lName}, ${fName}`); }
  fullName('Kristine', 'Hudgens');



const userInfo = (city, state, zip) => {
    return (`${city}, ${state} ${zip}`)
}

console.log(userInfo("Lehi", "UT", "84043"))