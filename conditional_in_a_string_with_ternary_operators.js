const page = 'about';
console.log(`class=${ page === 'Home' ? 'master-layout' : 'secondary-layout' }`);



var ship = "miss";
function battleShip() {
  return(`${ship === 'hit' ? '1 point' : ship === 'miss' ? 'You lost a point' : 'Needs to be hit or miss'}`)
}

console.log(battleShip())