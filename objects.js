var user = {
    name: 'Kristine',
    age: 12,
    city: 'Scottsdale',
    grades: {
      math: 90,
      science: 80,
      languageArts: 100
    }
  }
  user.age = 13;
  
  console.log(user.grades.math);
  
  user.grades.coding = 95;
  console.log(user.grades);