class Instructor {
    constructor({ name, role = 'assistant' }) {
      this.name = name;
      this.role = role;
    }
  
    renderDetails() {
      console.log(`${this.name}: ${this.role}`);
    }
}
  
const jon = new Instructor({name: 'Jon Snow'});
jon.renderDetails();
  
const brayden = new Instructor({name: 'Brayden', role: 'teacher'});
brayden.renderDetails();



class Car {
	constructor({ year, brand, poweredBy = 'gas' }) {
		this.year = year;
		this.brand = brand;
		this.poweredBy = poweredBy;
	}

	carSpecs() {
		return(`The ${this.year} ${this.brand} runs on ${this.poweredBy}`)
	}
}

const model3 = new Car({year: 2020, brand: "Tesla", poweredBy: "electricity"})
model3.carSpecs();