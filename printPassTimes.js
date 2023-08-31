const printPassTimes = (passTimes) => {
  // format: "Next pass at Fri Jun 01 2021 19:26:12 GMT-0700 (Pacific Daylight Time) for 643 seconds!"
  for (const time of passTimes) {
    // * 1000 to get it into milliseconds
    console.log(`Next pass at ${new Date(time.risetime * 1000)} for ${time.duration} seconds!`);
  }
};

module.exports = { printPassTimes };
