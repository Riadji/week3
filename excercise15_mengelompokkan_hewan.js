function groupAnimals(animals) {
  var arr = [];
    for(i = 0; i < animals.length; i++) {
     var a = animals[i].toLowerCase().charAt(0);
     if(arr.includes(a) == false) {
       arr.push(a);
     }
   }

  arr.sort();

  var ar = [];
  for(j = 0; j < arr.length; j++) {
   ar.push([]);
  }

  for(k = 0; k < animals.length; k++) {
     var b = animals[k].toLowerCase().charAt(0);
    var c = animals[k];
    for(j = 0; j < arr.length; j++) {

    if(arr[j] == b) {
       ar[j].push(animals[k]);
     }
    }
   } return ar;



}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
