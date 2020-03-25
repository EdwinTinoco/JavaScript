import moment from 'moment';

// Epich timestamp - number of seconds that have elapsed since January 1, 1970
console.log(moment.now()); //1585077143521

// Creating a new date object for right now
const rightNow = moment();
console.log(rightNow);

// Creating date object with a specific date/format
const birthday = moment('1983-07-31', 'YYYY-MM-DD');
console.log(birthday);

// Querying a named day of the week for a date
console.log(birthday.format('dddd'));

// Date counter
console.log(birthday.fromNow());

// Custom foramtted date
console.log(birthday.format("MMM Do YYYY"));

// Date calculations
const twoWeeksFromNow = moment().add(14, 'days');
console.log(twoWeeksFromNow.toString());
const anotherTwoWeeksFromNow = moment().add(2, 'weeks');
console.log(anotherTwoWeeksFromNow.toString());
const sixMonthsAgo = moment().subtract(6, 'months');
console.log(sixMonthsAgo.toString());