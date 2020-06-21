/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = function (array) {
  array.forEach((element) => console.log(element));
};

// logger([3, "jfir", "hi"]);

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = function (temperatures) {
  return temperatures.map((fahrenheit) => (fahrenheit - 32) * (5 / 9));
};

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const hottestDays = function (temperatures, threshhold) {
  return temperatures.filter((temperature) => temperature > threshhold);
};

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = function (temperatures, threshhold) {
  logger((toCelsius(hottestDays(temperatures, threshhold))));

  // console.log(temperatures.filter((temperature) => temperature > threshhold))

  // let hottestTemps = temperatures.filter((temperature) => temperature > threshhold);
  // hottestTemps.forEach((fahrenheit) => console.log((fahrenheit - 32) * (5 / 9)));

  // let celsiusTemps = temperatures.map(
  //   (fahrenheit) => (fahrenheit - 32) * (5 / 9)
  // );
  // let threshholdC = (threshhold - 32) * (5 / 9);

  // console.log(`1: ${temperatures}`);
  // console.log(`2: ${threshhold}`);
  // console.log(`3: ${celsiusTemps}`);
  // console.log(`4: ${threshholdC}`);

  // console.log(celsiusTemps.filter((temperature) => temperature > threshholdC));

  // console.log(temperatures.filter((temperature) => (temperature-32)*(5/9)>(threshhold-32)*(5/9) ))
};

logHottestDays([3, 4, 9, 20, 33, 131, 150], 22)

module.exports = { logger, toCelsius, hottestDays, logHottestDays };
