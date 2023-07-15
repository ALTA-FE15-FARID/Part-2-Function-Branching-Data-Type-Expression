//Bilangan Prima
function isPrimeNumber(num: number): boolean {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Sample test cases
  console.log(isPrimeNumber(11)) // true
  console.log(isPrimeNumber(13)) // true
  console.log(isPrimeNumber(17)) // true
  console.log(isPrimeNumber(20)) // false
  console.log(isPrimeNumber(35)) // false
  