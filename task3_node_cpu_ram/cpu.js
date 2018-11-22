var os = require('os-utils');

function calculateCpuUsage() {
  os.cpuUsage((v) => {
    const cpuUsed = (v * 100).toFixed(2);
    console.log(`CPU used (%): ${cpuUsed}`); // problem first result is not converted to % Delay async?
  });
}

module.exports = calculateCpuUsage;