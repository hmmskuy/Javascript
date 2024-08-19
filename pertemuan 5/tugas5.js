// Cast 1
let hari = "Rabu";

switch (hari) {
  case "Senin":
    console.log("weekday");
    break;
  case "Selasa":
    console.log("weekday");
    break;
  case "Rabu":
    console.log("weekday");
    break;
  case "Kamis":
    console.log("weekday");
    break;
  case "Jumat":
    console.log("weekday");
    break;
  case "Sabtu":
    console.log("weekend");
    break;
  case "Minggu":
    console.log("weekend");
    break;
  default:
    console.log("Hari yang dipilih tidak valid."); // buat cetak
}


// cast 2
for (let i = 1; i <= 27; i++) { // 
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz"); // 15
  } else if (i % 3 == 0) {
    console.log("fizz"); // 3
  } else if (i % 5 == 0) {
    console.log("buzz"); // 5
  } else {
    console.log(i);
  }
}
// Fizz 3 Dan Buzz 5 jadi jika fizz buzz 15 maka fizz nya itu 3 dan buzz nya itu 5 dan fizzbuzz itu
// kelipatan dari 3x5 sama dengan 15 

//cast 3
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
// kelipatan 2



// cast 4
for (i = 1; i <= 15; i++) {
  if (i % 3 == 0) {
    console.log("multiple of 3");
  }
  
}
