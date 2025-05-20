/**
 * Checks if a number is prime.A prime number is a natural number greater than 1 that has no positive divisors
 * other than 1 and itself
 */

function isPrime(n) {
  // Numbers less than or equal to 1 are not prime
  if (n <= 1) return false;

  // Check for divisibility from 2 to square root of n
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false
console.log(isPrime(2)); // Output: true
