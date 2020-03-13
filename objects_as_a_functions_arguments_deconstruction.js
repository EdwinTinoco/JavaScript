const user = {
    name: 'Kristine',
    email: 'kristine@devcamp.com'
  }
  
const renderUser = ({ name, email }) => {
    console.log(`${name}: ${email}`);
  }
  
  renderUser(user);



const bank = {
    accountNum: 454812259,
    name: 'John Doe',
    balance: 1257
}
  
 const bankInfo = ({accountNum, name, balance}) => {
   return (`Hi ${name}! Your current balance is $${balance}. Account#: ${accountNum}.`)
}
  
console.log(bankInfo(bank))