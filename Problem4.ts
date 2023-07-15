//Palindrome

function isPalindrome(str: string): boolean {
    const lowercaseStr = str.toLowerCase();
    const reversedStr = lowercaseStr.split('').reverse().join('');
    
    return lowercaseStr === reversedStr;
  }
  
  // Sample test cases
  console.log(isPalindrome('katak')); // Output: true
  console.log(isPalindrome('kupu-kupu')); // Output: false