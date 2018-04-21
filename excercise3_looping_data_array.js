var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];


var a = "Nomor ID : ";
var b = "Nama Lengkap : ";
var c = "TTL : ";
var d = "Hobi : ";



for(row = 0; row < input.length; row++) {
  console.log(a + input[row][0]);
  console.log(b + input[row][1]);
  console.log(c + input[row][2] + ", " + input[row][3]);
  console.log(d + input[row][4]);
  console.log("");

}
