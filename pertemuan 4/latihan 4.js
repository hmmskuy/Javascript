<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Latihan soal 4</title>
</head>
<body>
function cekKelayakanKursus(terdaftar, pembayaranSukses) {
  if (terdaftar === true && pembayaranSukses === true) {
    console.log("Dapat mengikuti kursus");
  } else {
    console.log("Tidak dapat mengikuti kursus");
  }
}

// Contoh penggunaan:
// Kasus 1: Terdaftar dan pembayaran sukses
cekKelayakanKursus(true, true);

// Kasus 2: Belum terdaftar tapi pembayaran sukses (tidak valid)
cekKelayakanKursus(false, true);

// Kasus 3: Terdaftar tapi pembayaran gagal
cekKelayakanKursus(true, false);

// Kasus 4: Belum terdaftar dan pembayaran gagal
cekKelayakanKursus(false, false);

</body>
</html>