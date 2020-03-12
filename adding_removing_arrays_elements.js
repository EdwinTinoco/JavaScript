var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

arr.length; //4

arr.pop(); // "Springer"  pop elimina y returns the last value

arr; // ['Altuve', 'Bregman', 'Correa']

arr.push('Bagwell'); // 4 se inserta al final

arr; // ['Altuve', 'Bregman', 'Correa', 'Bagwell']

arr.shift(); // ['Bregman', 'Correa', 'Bagwell'] elimina el primer elemnto del array y lo regresa  

arr.unshift('Kyle'); // 4 inserta al inicio del array

arr; // ['Kyle', 'Bregman', 'Correa', 'Bagwell']