function targetTerdekat(arr) {
  var o = 0;
  var x = 0;
  for(i = 0; i < arr.length; i++) {
    if(arr[i] == 'o') {
    o += 1;
   }else if(arr[i] == 'x') {
    x += 1;
   }
  }

  var terdekat = null;
  var indexo = null;
  for(l = 0; l < arr.length; l++) {
    if(arr[l] == 'o') {
     indexo = l;
     }
  }
    for(k = 0; k < arr.length; k++) {
    if(arr[k] == 'x') {

      if(indexo < k){
        var indexx = k - indexo;

        if(terdekat == null ){
          terdekat = indexx;
        } else {
          if(indexx < terdekat){
            terdekat = indexx;
          }
        }
      } else {
        var indexx = indexo - k;

        if(terdekat == null ){
          terdekat = indexx;
        } else {
          if(indexx < terdekat){
            terdekat = indexx;
          }
        }
      }
     }
    }
    if(x != 0){
    return terdekat;
    } else {
      return 0;
    }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
