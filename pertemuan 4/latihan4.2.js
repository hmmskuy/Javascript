var pendaftaran = false;
var pembayaran = true;

if (pendaftaran === true) {
  if (pembayaran === true) {
    console.log("Dapat mengikuti Kursus");
  } else {
    console.log("Tidak dapat mengikuti Kursus");
  }
} else {
  console.log("Tidak dapat mengikuti Kursus");
}

// Jika Pendaftaran true dan pembayaran nya true maka hasilnya adalah tidak dapat mengikuti kursus
// Jika pendaftaran false dan pembayaran true maka hasilnya adalah dapat mengikuti kursus
// jika pendaftarn false dan pembayaran false maka hasilnya adalah Tidak dapat mengikuti kursus
// Jika pembayarannya false dan pendaftarnnya true maka hasilnya adalah Tidak dapat mengikuti kursus