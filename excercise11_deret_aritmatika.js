function tentukanDeretAritmatika(arr) {
  var res = new Array(arr.length - 1);
  var i = 0;
  do {
     if(i > 0) {
     var a = arr[i] - arr[i - 1];
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
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
