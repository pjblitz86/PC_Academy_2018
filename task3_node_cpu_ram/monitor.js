const ram = require('./ram');
const cpu = require('./cpu');

function cpuAndRamUsed() {
  cpu();
  ram();
}

setInterval(cpuAndRamUsed, 500);