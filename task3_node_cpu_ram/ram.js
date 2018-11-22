const os = require('os');

function calculateRamUsage() {
  const totalRam = os.totalmem();
  const freeRam = os.freemem();
  const freeRamPercent = ((totalRam - freeRam) / totalRam * 100).toFixed(2);
  console.log(`RAM used (%): ${freeRamPercent}`);
}

module.exports = calculateRamUsage;

