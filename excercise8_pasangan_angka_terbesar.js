function pasanganTerbesar(num) {
  var a = num.toString().length;
  var b = num.toString().split("");
  var c = 0;
  for (i = 0; i < a - 1; i++) {
    var d = b[i] + b[i + 1]
    if(parseInt(d) > c){
      c = d;
    }
  }
  return c;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
