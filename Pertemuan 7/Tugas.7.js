// Soal 1
// Membuat object literal 
let person = {
    name: "Alya",
    age: 12,
    city: "Jakarta"
  };
  console.log(person.name)
  console.log(person.city)
  console.log(person.age)

// mengakses nilai name dari objek person menggunakan dot notation dan bracket notation 


  person = {
    name: "daffa",
    age: 15,
    city: "bandung "
  };
  console.log(person.name);
  console.log(person["nama"])


  // Mengubah age menggunakan dot notation
  person.age = person.age + 5
  console.log(person.age)
  // Mengubah age menggunakan bracket notation
  person["age"] = person["age"] +5
  console.log(person["age"])

  // Menghapus property city dari objek person menggunakan operator delete
  person = {
    name: "Mumtaaz",
    age: 15,
    city: "bandung "
  };

  delete person.city;
  console.log(person);

  // Soal 2
  // Menggunakan destructuring

  person = {
    name: "safa",
    age: 25,
    city: "bandung "
  };
   
  // Destructuring dengan nama variable yang sama
  let { name , age} = person;
  console.log(name)
  console.log(age)

  // Destructuring dengan nama variable yang beda
  let {name: userName, age: userAge } = person;
  console.log(userName)
  console.log(userAge)

  // Deklarasi dan instansiasi kelas

  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  
    getDetails() {
      return `Title: ${this.title}, Author: ${this.author}`;
    }
  }
  
  const myBook = new Book("JavaScript Essentials", "Hammam");
  
  console.log(myBook.getDetails());
  
  class animal {
    constructor(name, from, penulis) {
      this.name = name;
      this.from = from;
      
    }
  
    // Metode getDetails yang mengembalikan detail buku
    getDetails() {
      return `name: ${this.name}, from: ${this.from}`;
    }
  
    // Metode updateAnimal untuk mengubah nama hewan
    updateName(newName) {
      this.name = newName;
    }
  }
  
  const myanimal = new animal("lion king", "Jakarta");
  
  console.log(myanimal.getDetails()); // Output: Title: JavaScript Essentials, Author: Jane Doe
  
  //   animal.updateanimal("titan");
  
  console.log(myanimal.getDetails());
  

