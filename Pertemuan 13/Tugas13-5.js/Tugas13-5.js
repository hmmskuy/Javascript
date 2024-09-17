function fetchDataA() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data A');
      }, 1000); // Resolves 'Data A' setelah 1 detik
    });
  }
  
  function fetchDataB() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data B');
      }, 2000); // Resolves 'Data B' setelah 2 detik
    });
  }
  
  // Contoh penggunaan
  fetchDataA().then((data) => console.log(data)); // Output: 'Data A' setelah 1 detik
  fetchDataB().then((data) => console.log(data)); // Output: 'Data B' setelah 2 detik

  
  // soal ke 2
  function fetchDataA() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data A');
      }, 1000); // Resolves 'Data A' setelah 1 detik
    });
  }
  
  function fetchDataB() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data B');
      }, 2000); // Resolves 'Data B' setelah 2 detik
    });
  }
  
  // Menjalankan kedua promise secara paralel dengan Promise.all
  Promise.all([fetchDataA(), fetchDataB()])
    .then((results) => {
      const combinedData = results.join(' & '); // Gabungkan hasilnya
      console.log('Gabungan Data:', combinedData); // Output: 'Data A & Data B'
    })
    .catch((error) => {
      console.error('Terjadi kesalahan:', error); // Menangani kesalahan jika salah satu promise gagal
    });
  