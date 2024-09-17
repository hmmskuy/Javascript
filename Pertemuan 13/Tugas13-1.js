function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched");
      }, 3000);
    });
  }
  
  // Contoh penggunaan
  fetchData().then((result) => {
    console.log(result); // Output setelah 3 detik: "Data fetched"
  });
  
  // Soal ke 2
  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched");
        // Jika ingin mencoba menangani error, bisa gunakan reject, misalnya:
        // reject("Error fetching data");
      }, 3000);
    });
  }
  
  // Memanggil fetchData dengan .then() dan .catch()
  fetchData()
    .then((result) => {
      console.log(result); // Output: "Data fetched" setelah 3 detik
    })
    .catch((error) => {
      console.error(error); // Jika ada error, tampilkan di sini
    });
  