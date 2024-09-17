function simulateTask() {
    return new Promise((resolve, reject) => {
      const delay = 1500; // nilai penundaan tetap dalam milidetik, misalnya 2500ms (2,5 detik)
  
      if (delay <= 2000) {
        setTimeout(() => {
          resolve('Task Success');
        }, delay);
      } else {
        setTimeout(() => {
          reject('Task Failed');
        }, delay);
      }
    });
  }
  
  // Contoh penggunaan
  simulateTask()
    .then((result) => {
      console.log(result); // 'Task Success' jika delay <= 2 detik
    })
    .catch((error) => {
      console.error(error); // 'Task Failed' jika delay > 2 detik
    });

    
  

    // Soal ke 2

    simulateTask()
  .then((result) => {
    console.log(result); // Menampilkan hasil jika promise berhasil
  })
  .catch((error) => {
    console.error(error); // Menangani kesalahan jika promise ditolak
  })
  .finally(() => {
    console.log('Task completed'); // Menampilkan pesan setelah semua langkah di atas
  });
