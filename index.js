const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error.message);
  }
  // success, print out the deets!
  for (let pass of passTimes) {
    const unixTime = pass.risetime;
    const date = new Date(unixTime * 1000);
    const formattedDate = date.toUTCString();
    const resultStr = `Next pass at ${formattedDate} for ${pass.duration} seconds!`;
    console.log(resultStr);
  }
});