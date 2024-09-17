function fetchStep1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Step 1 Complete');
      }, 1000); // Penundaan 1 detik
    });
  }
  
  function fetchStep2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Step 2 Complete');
      }, 2000); // Penundaan 2 detik
    });
  }
  
  function fetchStep3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Step 3 Complete');
      }, 3000); // Penundaan 3 detik
    });
  }
  
  // Contoh penggunaan
  fetchStep1().then((result) => {
    console.log(result); // Output setelah 1 detik: "Step 1 Complete"
  });
  
  fetchStep2().then((result) => {
    console.log(result); // Output setelah 2 detik: "Step 2 Complete"
  });
  
  fetchStep3().then((result) => {
    console.log(result); // Output setelah 3 detik: "Step 3 Complete"
  });

  
  // Soal ke 2

  function fetchStep1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Step 1 Complete');
      }, 1000); // Penundaan 1 detik
    });
  }
  
  function fetchStep2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Step 2 Complete');
      }, 2000); // Penundaan 2 detik
    });
  }
  
  function fetchStep3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Step 3 Complete');
      }, 3000); // Penundaan 3 detik
    });
  }
  
  // Menggunakan Promise.all untuk menjalankan semua promise secara paralel
  Promise.all([fetchStep1(), fetchStep2(), fetchStep3()])
    .then((results) => {
      console.log('All steps completed:', results); 
      // Output: ['Step 1 Complete', 'Step 2 Complete', 'Step 3 Complete']
    })
    .catch((error) => {
      console.error('Error occurred:', error);
    });
  