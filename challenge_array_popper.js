class togglePopper{
  constructor(array) {
    this.array = array;
  }
  
  array_popper(this, idx){   
    console.log(this.array.pop([idx]));   
  }
}

var someArray = [1, 2, 3, 4, 5];

num_popper = new togglePopper(someArray);
num_popper.array_popper(0);
num_popper.array_popper(4);
num_popper.array_popper(1);
num_popper.array_popper(3);
num_popper.araay_popper(2);



// Jordan example
class ArrayPopper {
  constructor(arr) {
    this.arr = arr;
    this.atBeginning = true;
  }

  togglePopper() {
    this.atBeginning = !this.atBeginning;
    return this.atBeginning ? this.arr.pop() : this.arr.shift();
  }
}

const ap = new ArrayPopper([1, 2, 3, 4, 5]);
ap.togglePopper(); //?
ap.togglePopper(); //?
ap.togglePopper(); //?
ap.togglePopper(); //?
ap.togglePopper(); //?
ap.togglePopper(); //?