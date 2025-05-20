function isPrime(n) {
  // Step 1: Eliminate numbers less than or equal to 1 (not prime by definition)
  if (n <= 1) return false;

  // Step 2: Handle 2 explicitly (2 is the only even prime number)
  if (n === 2) return true;

  // Step 3: Eliminate all other even numbers greater than 2 (not prime)
  if (n % 2 === 0) return false;

  // Step 4: Only check for divisibility up to the square root of n
  // No need to check beyond that, as factors repeat beyond sqrt(n)
  const sqrtN = Math.sqrt(n);

  // Step 5: Check for divisibility by odd numbers only (skip even numbers)
  for (let i = 3; i <= sqrtN; i += 2) {
    // If any number divides n exactly, it's not prime
    if (n % i === 0) return false;
  }

  // Step 6: If no divisors found, number is prime
  return true;
}

// Usage examples
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
console.log(isPrime(2)); // true
