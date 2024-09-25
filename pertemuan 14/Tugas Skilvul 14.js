// Soal Skilvul
function helloWorld() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000); // durasi timeout 2000 ms (2 detik)
    });
}

helloWorld().then((message) => console.log(message));

// soal ke 2 
async function message() {
    const msg = await helloWorld();
    console.log(msg)
    setTimeout(() => {
    },  2000 )
}

message()

// Soal Skilvul clear