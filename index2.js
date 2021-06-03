const { nextISSTimesForMyLocation } = require("./iss_promised");

const printPassTimes = function(passTimes) {
  for (let pass of passTimes) {
    const unixTime = pass.risetime;
    const date = new Date(unixTime * 1000);
    const formattedDate = date.toUTCString();
    const resultStr = `Next pass at ${formattedDate} for ${pass.duration} seconds!`;
    console.log(resultStr);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
