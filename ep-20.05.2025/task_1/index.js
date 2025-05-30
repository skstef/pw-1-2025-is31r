/**
 * Converts a temperature from Celsius to Fahrenheit using the formula: F = (C * 9/5) + 32
 */
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(0)); // Output: 32
console.log(celsiusToFahrenheit(25)); // Output: 77
