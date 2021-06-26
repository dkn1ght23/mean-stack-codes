const welcome = require('./welcome');
const math = require('./math');

welcome('Mujammal');

console.log(welcome);

const mathCal = new math();

console.log(mathCal.add(6,8));

