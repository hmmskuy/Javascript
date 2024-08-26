// Latihan Soal 1 
// Latihan Soal 1 
class Orang {
    constructor(nama, umur) {
      this.nama = nama;
      this.umur = umur;
    }
  }
  
  class Pelajar extends Orang {
    constructor(nama, umur, namaSekolah) {
      super(nama, umur); // Memanggil constructor kelas induk
      this.namaSekolah = namaSekolah;
    }

    belajar() {
      return `${this.nama} belajar di ${this.namaSekolah}`;
    }
  }
  
  // Membuat objek Pelajar
  var user = new Pelajar("Terra", 17, "Skilvul");
  
  // Menampilkan informasi pelajar
  console.log(user);


  

// Latihan soal 2
class Hewan {
    constructor(nama) {
      this.nama = nama;
    }
  
    makan() {
      return "Hewan sedang makan";
    }
  }
  
  // Buat kode kamu di bawah ini
  
    class Harimau extends Hewan {
      makan() {
        return `${this.nama} makan daging`;
      }
    }
    
    // Membuat objek harimauSumatra
    var harimauSumatra = new Harimau("Harimau Sumatra");
    
    // Memanggil method makan() dan mencetak hasilnya
    console.log(harimauSumatra.makan());