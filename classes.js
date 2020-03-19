class Instructor {
    constructor({ name }) {
      this.name = name;
    }
  }
  
  const jon = new Instructor({ name: 'Jon Snow' });
  console.log(jon.name);

  

  


  class Account{
    constructor({username, password}){
        this.username = username;
        this.password = password;
    }
}

const user = new Account({username: "Edwin", password: "12345"})