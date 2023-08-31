const { nextISSTimesForMyLocation } = require("./iss");
const { printPassTimes } = require("./printPassTimes");

/*
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned IP:", ip);
});
*/

/*
fetchCoordsByIP("42", (error, data) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned geo coordinates:", data);
});
*/

/*
fetchISSFlyOverTimes(
  { latitude: "49.27670", longitude: "-123.13000" },
  (error, data) => {
    if (error) {
      console.log("It didn't work!", error);
      return;
    }

    console.log("It worked! Returned fly over times:", data);
  }
  );
  */

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
