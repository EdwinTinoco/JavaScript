const isIsogram = (str) => {
   str = str.toLowerCase();

   for (var i = 0; i < str.length; i++)
      for (var j = i + 1; j < str.length; j++)
         if (str[i] === str[j])
            return false;

   return true;
}

console.log(isIsogram("holaa"))