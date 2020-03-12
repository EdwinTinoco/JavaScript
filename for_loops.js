var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
  ];
  
  // for in loop trabaja con los index del array
  for (player in players) {
    console.log(players[player]);
  }

  // for of loop trabaja con los valores directos del array
  for (vals of players) {
    console.log(vals);
  }
  
  // for old fashion loop
  for (var i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  
  // for each loop
  players.forEach(function(player) {
    console.log(player);
  });


