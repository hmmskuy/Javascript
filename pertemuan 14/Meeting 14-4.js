// Latihan 4
async function getUserProfile() {
  try {
    // Mengirim permintaan ke API
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

    // Mengubah response menjadi JSON
    const data = await response.json();

    // Memeriksa nama pengguna
    if (data.name === "Leanne Graham") {
      console.log("User is Leanne Graham");
    } else {
      console.log("User is not Leanne Graham");
    }
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
}

// Memanggil fungsi
getUserProfile();

// Latihan soal 4 clear