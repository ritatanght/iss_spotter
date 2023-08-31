const { nextISSTimesForMyLocation } = require("./iss_promised");
const { printPassTimes } = require("./printPassTimes");

nextISSTimesForMyLocation()
  .then((passTimes) => printPassTimes(passTimes))
  .catch((err) => console.log("It didn't work: ", err.message));
