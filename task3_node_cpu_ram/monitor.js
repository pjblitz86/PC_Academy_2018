const ram = require('./ram');
const cpu = require('./cpu');

setInterval(cpu, 500);
setInterval(ram, 500);