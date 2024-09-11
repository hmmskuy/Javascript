function mandi(){
    console.log("Mandi")
}

function sarapan(callbck) {
  setTimeout(function() {
    console.log("Sarapan tertunda 3 detik");
    callbck()
  }, 3000);
}

sarapan()

function berangkatSekolah() {
    console.log("Berangkat Sekolah");
} 

berangkatSekolah();

mandi()
sarapan(berangkatSekolah);
