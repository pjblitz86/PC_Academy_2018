const ram = require('./ram');
const cpu = require('./cpu');

function cpuAndRamUsed() {
  ram();
  cpu();
}

setInterval(cpuAndRamUsed, 500);