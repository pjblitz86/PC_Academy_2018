var os = require('os-utils');

os.cpuUsage(function (v) {
  console.log('CPU Usage (%): ' + v);
});

function calculateCpuUsage() {
  os.cpuUsage((v) => {
    const cpuUsed = (v * 100).toFixed(2);
    console.log(`CPU used (%): ${cpuUsed}`); // problem first result is not converted to %
    console.log('--------------------');
  });
}

module.exports = calculateCpuUsage;