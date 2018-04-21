function angkaPalindrome(nomor) {

  i = nomor;

  do {
    i++;

    var b = i.toString();

    var c = i.toString().split("").reverse().join("");
    if(b == c) {
      z = "true"
    } else {
      z = "false"
    }
  } while (z == "false");

  return c;
}


console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
