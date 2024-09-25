// Soal 3 
function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hasil dari Task 1");
        }, 1000); // 1 detik
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hasil dari Task 2");
        }, 2000); // 2 detik
    });
}

async function performTasks() {
    const result1 = await task1();
    const result2 = await task2();
    
    console.log(result1);
    console.log(result2);
}

performTasks();

// Soal 3 clear
