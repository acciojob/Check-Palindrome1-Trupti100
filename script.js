// complete the given function

function palindrome(str){

}
module.exports = palindrome
function palindrome(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Compare the string with its reverse
    return s === s.split('').reverse().join('');
}

// Test cases
console.log(palindrome("race a car")); // Output: false
console.log(palindrome("racecar")); // Output: true
console.log(palindrome("RaceCar")); // Output: true
console.log(palindrome("raceCAR")); // Output: true
