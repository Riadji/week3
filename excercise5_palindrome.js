function palindrome(kata) {
  var a = /[\W_]/g;

  var b = kata.toLowerCase().replace(a, "");

  var c = b.split('').reverse().join("");

  return b === c;
}



// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
