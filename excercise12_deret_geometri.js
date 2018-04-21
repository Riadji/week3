function tentukanDeretGeometri(arr) {
  var res = new Array(arr.length - 1);
  var i = 0;
  do {
     if(i > 0) {
     var a = arr[i] / arr[i - 1];
     res[i] = a;
     if(i > 1) {
       if(res[i] == res[i - 1]){
        var c = 'sama';
       } else {
        var c = 'beda';
       }
     }
   }
   i++;
  } while ( i < arr.length-1 || c == 'beda' );
  if(c == 'sama'){
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
