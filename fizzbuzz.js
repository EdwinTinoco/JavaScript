
function fizzBuzz(n) {

   for (let i = 1; i <= n; i++) {
      let check_fizz = i % 3;
      let check_buzz = i % 5;
      let print = "";
      if (check_fizz === 0) {
         print += "Fizz";
      }
      if (check_buzz === 0) {
         print += "Buzz";
      }
      if (check_fizz !== 0 && check_buzz !== 0) {
         print = i
      }

      console.log(print);
   }
}


fizzBuzz(15)