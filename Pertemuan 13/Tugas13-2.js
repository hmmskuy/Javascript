function checkNumber(index) {
    return new Promise((resolve, reject) => {
      const numbers = [3, 7, 1, 6]; // Array statis
      const selectedNumber = numbers[index]; // Memilih angka berdasarkan indeks
  
      if (selectedNumber > 5) {
        resolve(selectedNumber); // Menyelesaikan promise jika angka lebih dari 5
      } else {
        reject("Number too low"); // Menolak promise jika angka kurang dari atau sama dengan 5
      }
    });
  }
  
  // Contoh penggunaan:
  checkNumber(1)
    .then((result) => {
      console.log("Promise resolved with number:", result);
    })
    .catch((error) => {
      console.log("Promise rejected with error:", error);
    });
  

    // Soal ke 2
    // Memanggil fungsi checkNumber
checkNumber(1)  // Menggunakan indeks 1
.then((result) => {
  // Jika promise berhasil (resolved)
  console.log("Promise resolved with number:", result);
})
.catch((error) => {
  // Jika promise ditolak (rejected)
  console.log("Promise rejected with error:", error);
});

// Contoh lain dengan indeks yang akan menyebabkan promise ditolak
checkNumber(0)  // Menggunakan indeks 0
.then((result) => {
  // Jika promise berhasil (resolved)
  console.log("Promise resolved with number:", result);
})
.catch((error) => {
  // Jika promise ditolak (rejected)
  console.log("Promise rejected with error:", error);
});
