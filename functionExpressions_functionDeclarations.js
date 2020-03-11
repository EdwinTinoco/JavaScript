function greeting() { // function declaration
    return "Hi there!";
   };

var greetingTwo = function () { // function expression
    return "Hi there!";
};


   
   var age = 4;
   
   if (age <= 10) {
     var buildMenu = function () {
       return "Kids' Menu";
     };
   
     function wrongMenuBuilder () { //function declaration, dentro de un condicional mandara error, por eso se usan las function expressions dentro de un condicional
       return "Wrong Kids' Menu";
     }
   
     console.log(buildMenu());
     console.log(wrongMenuBuilder());
   }