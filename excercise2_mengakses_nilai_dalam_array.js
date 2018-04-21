function balikString(kata) {
  var reverse = "";

  for(i = kata.length -1; i >= 0; i--) {
     reverse = reverse + kata[i];
  } return reverse
}

console.log(balikString("Riadji Ramadhan"));
