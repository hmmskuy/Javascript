var nilai = 69
var kehadiran = 23
var totalpertemuan = 25
var presentasekehadiran = kehadiran/totalpertemuan*100


if (nilai >=85) {
 console.log("katagori a");
  if (presentasekehadiran >= 75) {
    console.log("lulus");
  } else{
    console.log("tidak lulus");
  }

  // Jika "Nilai" siswa 85 atau lebih maka kategori siswa tersebut adalah A
  // dan jika presentasekehadiran >= 75 , siswa dinyatakan lulus , jika kurang dari 75 maka dinyatakan tidak lulus

} else if (nilai >70 && nilai <=85) {
    console.log("katagori b");
    if (presentasekehadiran >75) {
        console.log("lulus");
    }else {
        console.log("tidak lulus");
    }

//Jika nilai siswa lebih dari 70 tapi kurang atau sama dengan 85, maka kategori siswa adalah "B".
// Jika presentasekehadiran > 75, siswa dinyatakan "lulus". Jika tidak, maka "tidak lulus".


}  else if (nilai >=50 && nilai <=70) {
    console.log("katagori c");
    if (presentasekehadiran >75) {
        console.log("lulus");
    }else {
        console.log("tidak lulus");
    }

    // Jika nilai siswa antara 50 dan 70 (inklusif), maka kategori siswa adalah "C".
    // Jika presentasekehadiran > 75, siswa dinyatakan "lulus". Jika tidak, maka "tidak lulus".

} else if (nilai <50) {
    console.log("tidak lulus");
    if (presentasekehadiran >75) {
        console.log("lulus");
    }
} 

// Jika nilai siswa kurang dari 50, maka siswa langsung dinyatakan "tidak lulus".
// Kondisi tambahan di sini memeriksa jika presentasekehadiran > 75, meskipun ini sebenarnya redundant karena siswa sudah dinyatakan "tidak lulus" berdasarkan nilai.
