
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2() {
 //ini untuk mengubah input
 input.splice(1, 4,  "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");

  //split untuk memisahkan antara tanggal, bulan, dan tahun (untuk dijadikan integer)
  var kata = input[3].split("/");
  //split untuk memisahkan antara tanggal, bulan, dan tahun (untuk dijadikan string)
  var kata2 = input[3].split("/");
  console.log(input);

  //Untuk merubah hasil split menjadi integere
  for(var i = 0; i < kata.length; i++) {
    kata[i] = parseInt(kata[i])
  }

  //Untuk menjadikan nomor bulan menjadi bulan
  switch(kata[1]) {
    case 1: {console.log("Januari"); break;}
    case 2: {console.log("Februari"); break;}
    case 3: {console.log("Maret"); break;}
    case 4: {console.log("April"); break;}
    case 5: {console.log("Mei"); break;}
  }

  //Untuk men-sort tanggal secara descending
  kata.sort();
  //Merubah hasil sort menjadi string
  for(var i = 0; i < kata.length; i++) {
    //untuk menambahkan 0 pada satu karakter (pada angka 5)
    if(kata[i].toString().length == 1){
    kata[i] = "0" + kata[i];
    } else {
      kata[i] = "" + kata[i];
    }

    }
  console.log(kata);
  console.log(kata2.join("-"));

  console.log(input[1].slice(0, 14));
}

dataHandling2();
